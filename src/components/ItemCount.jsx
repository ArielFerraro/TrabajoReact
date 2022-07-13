import React, {useState} from "react";
import './ItemCount.css'
import { Link } from "react-router-dom";




const ItemCount = ({stock, producto}) =>{
    const [cuenta, setCuenta] = useState (1)
    
    

    const agregarCarrito = (event) => {
        const productoConStock = producto;
        productoConStock.stock = cuenta;
        console.log(productoConStock);
    }


    const sumar = () => {
    if (cuenta < stock) {
        setCuenta (cuenta + 1)
    }
}

    const restar = () => {
        if (cuenta > 1) {
            setCuenta (cuenta - 1)
        }
        
    }

    return (
    <>
    <p>{cuenta}</p>
    <button onClick = {restar}>-</button>
    <button onClick = {sumar}>+</button>
    <button onClick={agregarCarrito}>Agregar al carrito</button>
    
    
    </>
    )
    


}

export default ItemCount