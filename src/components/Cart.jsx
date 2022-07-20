import React, { useState } from "react";
import { cartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = ({eliminarProducto}) => {
    
    const {productos} = useContext(cartContext);

    
    
    return (
        <>
        {productos.length === 0
            ? <h3>No hay productos en el carrito <Link to="/">ir a catalogo</Link></h3> 
            : 
            <> {productos.map((producto) => 
                <div key ={`${producto.id}`}>
                    <h2>{producto.nombre}</h2>
                    <img src={producto.imagen} alt="remera" width="200px" />
                    <p className="precio">{producto.precio}</p>
                    <p className="precio">{producto.qty}</p>
                    <button onClick={eliminarProducto}>eliminar item</button>
                    
                </div>)} 
            </>
        }
        </>
    )
}



export default Cart