import React from 'react';
import Person from './Person';
import {useBillContext} from '../Store/BillContext';

const BillBreakdown = () =>{

    const [bill,_] = useBillContext();

    return (
        <section>            
            {bill?.people?.length > 0 ? bill.people.map((p,i) => {
                return <Person key={i} data={p} />
            })
            : <span>Start breaking down your bill</span>
            }
            <style jsx>{`
            section{
                display:flex;
                justify-content:space-around;
                flex-wrap:wrap;
                align-items: center;
                margin-top: ${bill?.people?.length > 0 ? '20px':'10px'};
                padding: 0 20px;
            }
            `}</style>
        </section>
    )
};

export default BillBreakdown;