import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import ItemListContainter from  './components/ItemListContainer'
import CartWidget from './components/CartWidget';


const App = () => {
  
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainter greeting="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae voluptatem rem tempore consequuntur nobis iure ipsa voluptas. Beatae incidunt sint magni quisquam labore quae molestias pariatur nemo optio recusandae!"/>
      </>
  );

}




    

export default App;
