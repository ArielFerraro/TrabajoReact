import React, { useState } from "react";
import { cartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc,addDoc, collection, serverTimestamp } from "firebase/firestore";
import "./item.css"

const Cart = () => {
    
    const {productos,eliminarProducto} = useContext(cartContext);
    const [idVenta, setIdVenta] = useState("");

    const PrecioFinal = () => {
        let total = 0;
        productos.forEach((producto) => {
            total+=producto.precio*producto.qty;
        })
        return (<>
        <span className="total">Precio Final: ${total}</span> 
        </>
        )
    }
    const finalizarCompra = () => {
        const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection,{
            items: productos,
            date:  serverTimestamp(),
            total: PrecioFinal,
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
                <div key ={`${producto.id}`} className="ItemCarrito">
                    <h2>{producto.nombre}</h2>
                    <img src={producto.imagen} alt="remera" width="200px" />
                    <p className="precio">${producto.precio}</p>
                    <p>{producto.qty}</p>
                    <button  onClick={() => {eliminarProducto(producto.id)}}>eliminar item</button>
                    
                </div>)}
                <PrecioFinal/>
            <button className="final" onClick={finalizarCompra}>finalizarCompra</button>
                
                
            </>
        }
        </>
    )
}



export default Cart