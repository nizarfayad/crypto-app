import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import ErrorPage from './pages/ErrorPage'
import CoinDetails from './pages/CoinDetails'
import UserInfo from './pages/UserInfo'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
 return(
   <Router>
     <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profilee</Link>
        
     </nav>

     <Routes>
       <Route path="/" element={<Home />} >
         <Route path=":coinID"  element={<CoinDetails />} />
       </Route>
       <Route path="/about" element={<About />} />
       <Route path="/profile" element={<Profile />}>
          <Route path=":username" element={<UserInfo />} />
        </Route>       
       <Route path="*" element={<ErrorPage />} />
     </Routes>

     <footer> Crypto app footer </footer>

   </Router>
  )
}

export default App;
