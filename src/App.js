import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import ItemListContainter from  './components/ItemListContainer'
import { 
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartCustomProvider from './components/CartContext';
import Cart from './components/Cart';



const App = () => {
  
  return (
    <BrowserRouter>
    <CartCustomProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainter/>}/>
        <Route path='/categories/:categoriesName' element={<ItemListContainter/>}/>
        <Route path='/item/:productosId' element = {<ItemDetailContainer/>}/>
        <Route path='/cart' element = {<Cart/>}/>
      </Routes> 
      </CartCustomProvider>
    </BrowserRouter>
  );

}




    

export default App;
