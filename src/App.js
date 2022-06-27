import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import ItemListContainter from  './components/ItemListContainer'
import CartWidget from './components/CartWidget';


const App = () => {
  
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainter greeting="PRODUCTO"/>
      </>
  );

}




    

export default App;
