import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';
import { Link, NavLink } from 'react-router-dom';




const NavBar = () => {

    const categories = [
        {name:"Home", id:0,route:"/categories/home"},
        {name:"Catalogo", id:1,route:"/categories/catalogo"},
        {name:"Ofertas", id:2,route:"/categories/ofertas"},
        {name:"Contacto", id:3,route:"/categories/contacto"},
        
    ];

    return (
        <header>
            <nav >
                <Link to="/" className='estilonav' > <h1>TITULO TIENDA</h1></Link> 
                {categories.map((categories) => <Link  key={categories.id} to={categories.route} className='estilonav'>{categories.name}</Link>)}
                <Link to="cart"><CartWidget/></Link>
            </nav>
        </header> 

    )
}

export default NavBar