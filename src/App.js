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



const App = () => {
  
  return (
    <BrowserRouter>
    <CartCustomProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainter/>}/>
        <Route path='/categories/:categoriesName' element={<ItemListContainter/>}/>
        <Route path='/item/:itemid' element = {<ItemDetailContainer/>}/>
      </Routes> 
      </CartCustomProvider>
    </BrowserRouter>
  );

}




    

export default App;
