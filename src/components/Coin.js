import React from 'react'
import {useNavigate} from 'react-router-dom'
import './../styles/Coin.css';

function Coin({id, name, price, icon, symbol}) {
    
    const navigate = useNavigate();
    return (
        <div className="coinbox" onClick={()=>{
            navigate(`/${id}`)
        }}>
            <figure><img src={icon} /></figure>
            <div>{symbol}<span>{name}</span></div>
            <div>{price}</div>
            
            
        </div>
    )
}

export default Coin
