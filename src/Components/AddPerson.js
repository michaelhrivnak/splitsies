import React,{useRef} from 'react';
import {useBillContext} from '../Store/BillContext';

const AddPerson = () => {

    const total = useRef(0);
    const [_,dispatch] = useBillContext();

    return(
        <section>
            <button onClick={()=>dispatch({type:"addPerson"})}>Add a Person</button>
            <label htmlFor="total">
                Total: $
                <input ref={total} onChange={() => dispatch({type:"setTotal",total:parseFloat(total.current.value)})} name="total" type="number" placeholder="0.00"/>
            </label>
            <style jsx>{`
                section{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-items: center;
                }
                label{
                    display: flex;
                    font-weight:bold;
                    align-items: center;
                    font-size: 2rem;
                }
                button{
                    border: 2px solid blue;
                    background-color: lightblue;
                    padding: 10px;
                    border-radius: 10px;
                    font-size: 1.5rem;
                }
                span{
                    margin-right: 2px;
                }
                input{
                    
                    font-size: 1.5rem;
                }
            `}</style>
        </section>
    )
}

export default AddPerson;