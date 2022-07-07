import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer"



const ItemDetail = ({detalle}) => {
    
    return (
            <>  
            
                <div>
                    <button onClick={detalle}>ver detalle</button>
                    <h2>{detalle.nombre}</h2>
                    <img src={detalle.imagen} alt="remera" width="200px" />
                    <p>{detalle.descripcion}</p>
                    <p className="precio">{detalle.precio}</p>

                </div>
            </>
        )
    }
export default  ItemDetail




