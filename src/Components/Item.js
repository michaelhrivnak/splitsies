import React,{useRef} from 'react';
import {useBillContext} from '../Store/BillContext';

const Item = ({data}) => {

    const [_,dispatch] = useBillContext();
    const cost = useRef(0);

    return (
        <li>
            <input ref={cost} step="0.01" onChange={()=>dispatch({type:"changeCost",itemId:data.id,personId:data.personId, cost:parseFloat(cost.current.value)})} placeholder="0.00" type="number"/>
            <button onClick={() => dispatch({type:"removeItem", itemId:data.id, personId:data.personId})}>x</button>
        </li>
    )
}

export default Item