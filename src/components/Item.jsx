import React from "react";
import data from "../data/data"
import "../components/item.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const item = ({productos}) => {
    return (
        <div>
            <h2>{productos.nombre}</h2>
            <p>{productos.precio}</p>
        </div>
    )
}


export default item