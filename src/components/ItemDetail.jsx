import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer"
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useState } from "react";
import agregarCarrito from "./ItemCount";



    const ItemDetail = ({detalle,agregarCarrito}) => {
    
        const [finalizarCompra,setFinalizarCompra] = useState();
    
        const finalizar = (event) => {
            console.log(event)
        }

            return (
            <>  
                <div>
                    <h2>{detalle.nombre}</h2>
                    <img src={detalle.imagen} alt="remera" width="200px" />
                    <p>{detalle.descripcion}</p>
                    <p className="precio">{detalle.precio}</p>
                    <ItemCount stock={5} producto={detalle}/>
                    <button onClick= {finalizar}>Finalizar Compra</button>
                </div>
            </>
        )
    }
export default  ItemDetail




