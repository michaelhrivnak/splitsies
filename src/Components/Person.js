import React, {useRef} from 'react';
import {useBillContext} from '../Store/BillContext';

import Item from './Item';

const Person = ({data}) => {

    const [bill,dispatch] = useBillContext();
    const name = useRef("");

    return (
        <div className="person">
            {/* <label>
                Perchaser
                <input type="radio"/>
            </label> */}
            <input ref={name} onChange={() => dispatch({type:"changeName",personId:data.id,name:name.current.value})} type="text" placeholder="name" />
            <button onClick={() => dispatch({type:"addItem", personId:data.id})}>Add Item</button>
            <button onClick={() => dispatch({type:"removePerson", personId:data.id})}>X</button>
            <ul>
                {data.items.map((item,index) => {
                    return <Item key={index} data={item}/>
                })}
            </ul>            
            <span>Total portion: {data.items.length > 0 && bill.total > 0 && bill.itemsTotal > 0 ? `$${((data.items.reduce((b,i) => b += i.cost , 0) / bill.itemsTotal ) * bill.total).toFixed(2)}` : `$0.00`}</span>
            <style jsx>{`
                .person{
                    padding:30px;
                    border: 2px solid grey;
                    border-radius: 10px;
                    box-shadow: 2px 2px 0 0 #111111;
                    margin: 10px;
                }
                ul{
                    display:flex;
                    flex-wrap:wrap;
                    flex-direction:column;
                    margin-bottom:5px;
                }
                button{
                    margin-left: 5px;
                }
                span{
                    margin-top: 5px;
                }
            `}</style>
        </div>
    )
}

export default Person;