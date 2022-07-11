import React from "react";
import data from "../data/data"
import "../components/item.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Item = ({producto}) => {
    
    
    return (
        <div className="item">
            <h2>{producto.nombre}</h2>
            <Link to={`/item/${producto.id}`}><img src={producto.imagen} alt="remera" width="300px" /></Link>
            <p className="precio">{producto.precio}</p>
            
        </div>
    )
}


export default Item