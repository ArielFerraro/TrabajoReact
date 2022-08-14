import React, {useState} from "react";
import './ItemCount.css'





const ItemCount = ({stock, producto, onAdd}) =>{
    const [cuenta, setCuenta] = useState (1)
    
const agregar = () => {
    onAdd(cuenta); 
}

    const agregarCarrito = (event) => {
        const productoConStock = producto;
        productoConStock.stock = cuenta;
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
    <button onClick={() =>agregar()}>Agregar al carrito</button>
    
    
    </>
    )
    


}

export default ItemCount