import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
const NavBar = () => {
    return (
        <header>
        <h1>TITULO TIENDA</h1>       
        <Button href='#' variant="warning" >HOME</Button>
        <Button href='#' variant="warning">CATALOGO</Button>
        <Button href='#' variant="warning">OFERTAS</Button>
        <Button href='#' variant="warning">CONTACTO</Button>
        </header>
    )
}

export default NavBar