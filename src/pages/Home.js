import React , {useEffect, useState} from 'react';
import Axios from 'axios';
import Coin from './../components/Coin';
import { Outlet } from 'react-router-dom'

function Home() {
    const [coinsList, setCoinsList] = useState([])
    const [coinSearch, setCoinSearch] = useState('')
  
    useEffect(() => {
      //https://documenter.getpostman.com/view/5734027/RzZ6Hzr3?version=latest
      Axios
        .get("https://api.coinstats.app/public/v1/coins?skip=0")
        .then((res)=>{
          setCoinsList(res.data.coins)
        })
        .catch((err)=>{
          console.log(err)
        })
        .finally(()=>{
          console.log('Finish Fetching data...')
        })
    }, [])
  
    const filterCoins = coinsList.filter((coin)=>{
      return coin.name.toLowerCase().includes(coinSearch.toLowerCase())
    })
  
  
    return (
      <div className="App"> 
        <Outlet />
        
          <header className="main_header">
            <input type="text" placeholder="Search" onChange={(event)=>{
              setCoinSearch(event.target.value)
            }} />
          </header>
          <main className="body_container">{filterCoins.map((coin)=>{ 
            return <Coin key={coin.id} id={coin.id} name={coin.name} price={coin.price} symbol={coin.symbol} icon={coin.icon} />;
          })}</main>

        
      </div>
    );
}

export default Home
