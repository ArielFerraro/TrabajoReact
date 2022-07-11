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




const App = () => {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainter/>}/>
        <Route path='/categories/:categoriesName' element={<ItemListContainter/>}/>
        <Route path='/item/:itemid' element = {<ItemDetailContainer/>}/>
      </Routes> 
      
    </BrowserRouter>
  );

}




    

export default App;
