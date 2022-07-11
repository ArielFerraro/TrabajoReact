import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer"
import { Link } from "react-router-dom";



const ItemDetail = ({detalle}) => {
    
    return (
            <>  
            
                <div>
                    <h2>{detalle.nombre}</h2>
                    <img src={detalle.imagen} alt="remera" width="200px" />
                    <p>{detalle.descripcion}</p>
                    <p className="precio">{detalle.precio}</p>
                </div>
            </>
        )
    }
export default  ItemDetail




