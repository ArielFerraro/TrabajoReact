import React from "react";
import data from "../data/data"
import "../components/item.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({producto}) => {
    return (
        <div>
            <h2>{producto.nombre}</h2>
            <img src={producto.imagen} alt="remera" width="300px" />
            <p className="precio">{producto.precio}</p>
        </div>
    )
}


export default Item