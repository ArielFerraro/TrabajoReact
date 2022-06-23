import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '..//imagen/carrito.svg'


const CartWidget = () => {
    return (
    <img src={logo} alt="carrito" />
    )
}

export default CartWidget