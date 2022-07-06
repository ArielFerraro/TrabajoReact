import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import ItemListContainter from  './components/ItemListContainer'
import CartWidget from './components/CartWidget';
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer';


const App = () => {
  
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainter />
      </>
  );

}




    

export default App;
