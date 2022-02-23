import React, {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'

function CoinDetails() {
    const { coinID } = useParams(); 
    const [coinsList, setCoinList] = useState([])

    useEffect(() => {
         Axios
         .get(`https://api.coinstats.app/public/v1/markets?coinId=${coinID}`)
         .then((res) => { 
             console.log(res.data)
            setCoinList(res.data)
         })
    }, [])
 

    return (
        <div>
            Market of {coinID}
            {coinsList.map((coin,index)=>{ 
            return <div key={index}><h1>{coin.exchange} {coin.pair}  {coin.price}   {coin.volume}   {coin.price}</h1></div>
          })}  
        </div>
    )
}

export default CoinDetails
