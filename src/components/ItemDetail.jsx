import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { cartContext } from "./CartContext";
import { useContext } from "react";
import "./item.css"




    const ItemDetail = ({detalle}) => {
    
        const [finalizarCompra, setFinalizarCompra] = useState(false)
        const {agregarProducto} = useContext(cartContext);    


        const onAdd = (cuenta) => {
        
            agregarProducto ({...detalle, qty: cuenta});
            setFinalizarCompra(true)
            
        }
        
        return (
            <div className="detalle2">  
                <div className="detalle">
                    <div>
                    <p className="nombreproducto">{detalle.nombre}</p>
                    <img className="imagen imagenDetalle"src={detalle.imagen}  alt="remera" width="200px" />
                    <p className="descripcion">{detalle.descripcion}</p>
                    <p className="precio">${detalle.precio}</p>
                    
                    {finalizarCompra
                    ? <Link to="/cart">
                    <button>Finalizar compra</button>
                    </Link>
                    : <ItemCount stock={10} onAdd={onAdd} />}
                    </div>
                </div>
            </div>
        )
    }
export default  ItemDetail




