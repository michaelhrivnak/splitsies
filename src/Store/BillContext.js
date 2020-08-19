import React, {createContext,useContext, useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';

const billContext = createContext();

const { Provider } = billContext;

const useBillContext = () =>{
    return useContext(billContext);
}

const reducer = (bill, action) => {

    let updatedPeople = bill.people.map(e=>e);    
    let updatedItems;

    switch(action.type) {

        case "setTotal":

            return {...bill, total: action.total}

        case "addPerson":   

            let newPerson = {id: uuidv4() ,name:"",items:[],total:0};          

            return { ...bill,people:updatedPeople.concat(newPerson)};

        case "removePerson":

            updatedPeople = updatedPeople.filter(p => p.id !== action.personId );

            return {...bill, people:updatedPeople, itemsTotal: calculateItemsTotal(updatedPeople) }

        case "addItem":            
            
            let newItem = {id: uuidv4(),personId:action.personId, cost: 0};

            updatedPeople = updatedPeople.map(p => {
                if(p.id === action.personId){
                    return {...p, items: [...p.items, newItem]};
                }
                return p;
            });

            return {...bill, people:updatedPeople};

        case "removeItem": 

            updatedPeople = updatedPeople.map(p => {

                if(p.id === action.personId){

                    return {...p, items: p.items.filter(i => i.id !== action.itemId)};
                }
                return p;
            });

            return {...bill,people:updatedPeople,itemsTotal: calculateItemsTotal(updatedPeople)};

        case "changeCost":    

            updatedPeople = updatedPeople.map(p => {

                if(p.id === action.personId){

                    return {...p, items: p.items.map(i => {
                        if(i.id === action.itemId){
                            return {...i, cost: action.cost}
                        }
                        return i;
                    })};
                }
                return p;
            });

            return {...bill,people:updatedPeople, itemsTotal: calculateItemsTotal(updatedPeople)};

        case "changeName":

            updatedPeople.map(p => {
                if(p.id === action.personId){
                    return {...p, name: action.name}
                }
                return p;
            });

            return {...bill, people:updatedPeople}

        default:
        throw Error(`Invalid action type: ${action.type}`);
    }
}
const calculateItemsTotal = (people) =>{
    return people.reduce((total, p) => {
        return total += p.items.length > 0 ? p.items.reduce((subTotal, i) => subTotal += i.cost,0) : 0
    }, 0);
}

const BillProvider = ({ bill = {people:[],total:0,itemsTotal:0}, ...props }) => {
    
    const [state,dispatch] = useReducer(reducer, bill);
    return ( <Provider value={[state, dispatch]} {...props} />);
}

export {BillProvider,useBillContext};