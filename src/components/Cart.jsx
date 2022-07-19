import React from "react";
import { cartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = (producto) => {
    
    const {productos} = useContext(cartContext);
    console.log(productos)
    
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
                </div>)} 
            </>
        }
        </>
    )
}



export default Cart