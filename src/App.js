import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import ItemListContainter from  './components/ItemListContainer'
import { 
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartCustomProvider from './components/CartContext';
import Cart from './components/Cart';
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto';
import FormularioDePago from './components/FormularioDePago';



const App = () => {
  
  return (
    <BrowserRouter>
    <CartCustomProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainter/>}/>
        <Route path='/categories/:categoriesName' element={<ItemListContainter/>}/>
        <Route path='/item/:productoId' element = {<ItemDetailContainer/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path= '/categories/Nosotros' element = {<Nosotros/>}/>
        <Route path= '/categories/Contacto' element = {<Contacto/>}/>
        <Route path= '/formularioDePago'  element = {<FormularioDePago/>}/>
      </Routes> 
    </CartCustomProvider>
    </BrowserRouter>
  );

}




    

export default App;
