import React, { useState } from "react";
import { cartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebase";
import {addDoc, collection, serverTimestamp } from "firebase/firestore";
import "./item.css"
import FormularioDePago from "./FormularioDePago";

const Cart = () => {
    
    const {productos,eliminarProducto} = useContext(cartContext);
    const [idVenta, setIdVenta] = useState("");
    
    const precioFinal = () => {
        let total = 0;
        productos.forEach((producto) => {
            total+=producto.precio*producto.qty;
        })
        return total;
        
    }

    const  ElementoPrecioFinal = (props) => {
    
    return (<>
            <span className="precioFinal">Precio Final: ${props.total}</span> 
            </>
            )
    }
    const finalizarCompra = () => {
        const ventasCollection = collection(db, 'ventas');
        
        addDoc(ventasCollection,{
            nombre: document.getElementById("nombre").value,
            apellido: document.getElementById("apellido").value,
            tarjeta: document.getElementById("tarjeta").value,
            cuotas: document.getElementById("cuotas").value,
            vencimiento: document.getElementById("vencimiento").value,
            codigo: document.getElementById("codigo").value,
            telefono: document.getElementById("telefono").value,
            email: document.getElementById("email").value,
            items: productos,
            date:  serverTimestamp(),
            total: precioFinal(),
            
            
            
        })
        .then((result) =>{
            setIdVenta(result.id);
            
        })
        
    }
    
    return (
        <div>
        <p >CARRITO DE COMPRAS</p>
        {productos.length === 0
            ? <p className="nombreproducto">No hay productos en el carrito <Link to="/">IR AL CATALOGO</Link></p> 
            : 
            <div> 
                {productos.map((producto) => 
                <div key ={`${producto.id}`} className="ItemCarrito">
                    <h2>{producto.nombre}</h2>
                    <img src={producto.imagen} alt="remera" width="200px" />
                    <p className="precio">${producto.precio}</p>
                    <p>{producto.qty}</p>
                    <button onClick={() => {eliminarProducto(producto.id)}}>eliminar item</button>
                    
                </div>)}
                
                <div >
                <ElementoPrecioFinal total={precioFinal()}/>
                <div className="">
                    <p>NUMERO DE ORDEN:    {idVenta} </p>
                    <br />
                    <FormularioDePago/>
                    <button onClick={finalizarCompra}>Terminar Compra</button>
                </div>
                </div>
                
                
            </div>
        }
        </div>
    )
}



export default Cart