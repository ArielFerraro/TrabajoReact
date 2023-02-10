import React from "react";
import "../components/item.css"
import { Link } from "react-router-dom";

const Item = ({producto}) => {


return (
        <div className="item">
                <div>
                <img  className="imagen" src={producto.imagen} alt="remera"/>
                <h3>{producto.nombre}</h3>
                <p className="precio">${producto.precio}</p>
                <Link to={`/item/${producto.id}`}><button className="boton">Ver Detalle</button></Link>
                </div>
        </div>
        
)
}


export default Item