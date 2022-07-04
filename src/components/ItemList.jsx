import React from "react";
import item from "../components/Item";


const ItemList = ({productos}) => {
    return (
        <>
            <item key= {productos.id} productos={productos}/>
        </>
    )
}

export default  ItemList