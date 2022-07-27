import React, { useState } from "react";
import { cartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc,addDoc, collection, serverTimestamp } from "firebase/firestore";


const Cart = () => {
    
    const {productos,eliminarProducto} = useContext(cartContext);
    const [idVenta, setIdVenta] = useState("");

    const finalizarCompra = () => {
        const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection,{
            items: productos,
            date:  serverTimestamp(),
            total: 10000, //falta poner el total de los productos
        })
        .then((result) =>{
            setIdVenta(result.id);
        })

    }
    
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
                <button onClick={finalizarCompra}>finalizarCompra</button>
                
            </>
        }
        </>
    )
}



export default Cart