import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./ItemCount";


const ItemListContainer = () => {
    return (
        <>
        <p>PRODUCTO</p>
        <ItemCount stock = {5}/>
        </>
    );
}

export default ItemListContainer

