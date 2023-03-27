import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home/Home';
import FlowersPage from './components/Flowers/FLowers';
import Cart from './components/Cart/Cart';
import Navigation from './components/NavigationBar/Navigation';
import axios from "axios"
import { useEffect, useState } from 'react';
import { CartContext } from './components/Contexts/CartContext'; 

function App() {
  const [allFlowers, setAllFlowers] = useState([]);
  const [myCart, addToCart] = useState([{}]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    async function getData(){
      const response = await axios.get("/v1/flowers")
      return response
    }
    getData().then((response) => setAllFlowers(response.data));
    getData().catch(console.log("Website has some problems!"));
  }, [])

  return (
    <CartContext.Provider value={{myCart, addToCart, totalPrice, setTotalPrice}}>
      <Router>
        <Navigation/>
        <div className='page-container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/flowers' element={<FlowersPage allFlowers={allFlowers} />}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
