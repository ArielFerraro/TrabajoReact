import React from 'react';
import Button from 'react-bootstrap/Button';
import { useWindowSize } from '../utils/hooks/useWindowSize';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';
import { Link} from 'react-router-dom';
import { Nav, Navbar, } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Nosotros from './Nosotros';




const NavBar = () => {
    const size = useWindowSize();

    const categories = [
        {name:"Nosotros", id:0,route:"/categories/Nosotros"},
        {name:"Catalogo", id:1,route:"/categories/catalogo"},
        {name:"Contacto", id:2,route:"/categories/Contacto"}
    ];

    const isMobile = size.width <= 960;

    const logo = !isMobile ? (
        <div>
            <Link to="/" className='titulo'> <h1> MARKET</h1></Link>
        </div>
    ) 
    : (
        <Link to="/" className='titulo'> <h1> M</h1></Link>
    )

    const desktopMenu = (
        <div className='navegationItems'>
            {categories.map((categories) => <Link  key={categories.id} to={categories.route} className='estilonav'>{categories.name}</Link>)}
        </div>
    )

    const mobileMenu = (
        <Navbar collapseOnSelect expand="lg" >
      <Navbar.Brand href="#home">
    
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href='/categories/Nosotros' >Nosotros</Nav.Link>
          <Nav.Link href='/' >Catalogo</Nav.Link>
          <Nav.Link href='/categories/Contacto'>Contacto</Nav.Link> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )

    const navMenu = isMobile ? mobileMenu : desktopMenu;
    // si la resolucion es mas que 960 el navbar va a ser el nav desktop, si es menos es el desplegable (burger menu)

    return (
        <header>
            {logo}
            {navMenu}
            <Link  to="Cart" className='shoppingCart'><CartWidget/></Link>
        </header> 

    )
}

export default NavBar