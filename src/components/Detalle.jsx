import React from "react";
import detalle from "../data/DataDetalle"



const Detalles = ({detalle}) => {
    return (
        <div>
            <h2>{detalle.nombre}</h2>
            <img src={detalle.imagen} alt="remera" width="200px" />
            <p>{detalle.descripcion}</p>
            <p class="precio">{detalle.precio}</p>
        </div>
    )
}


export default Detalles