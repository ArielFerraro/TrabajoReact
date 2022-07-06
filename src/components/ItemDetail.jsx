import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer"




const ItemDetail = ({objetoDetalle}) => {
    return (
            <>  
            <div>
                <h2>{objetoDetalle.nombre}</h2>
                <img src={objetoDetalle.imagen} alt="remera" width="200px" />
                <p>{objetoDetalle.descripcion}</p>
                <p class="precio">{objetoDetalle.precio}</p>
            </div>
            </>
        )
    }
export default  ItemDetail




