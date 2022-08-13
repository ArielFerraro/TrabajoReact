import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';
import { Link} from 'react-router-dom';




const NavBar = () => {

    const categories = [
        {name:"Nosotros", id:0,route:"/categories/Nosotros"},
        {name:"Catalogo", id:1,route:"/categories/catalogo"},
        {name:"Contacto", id:2,route:"/categories/Contacto"},
        
        
    ];

    return (
        <header>
            <nav className='navContainer'>
                <div>
                <Link to="/" className='estilonav' > <h1>REMERAS Y ESTAMPA2</h1></Link>
                </div>
                <div className='navegationItems'>
                {categories.map((categories) => <Link  key={categories.id} to={categories.route} className='estilonav'>{categories.name}</Link>)}
                <Link  to="Cart" className='shoppingCart'><CartWidget/></Link>
                </div>
            </nav>
        </header> 

    )
}

export default NavBar