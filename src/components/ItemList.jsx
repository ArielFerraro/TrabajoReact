import React from "react";
import Item from "../components/Item";

    const ItemList = ({productos}) => {
    return (
            <>  
                {productos.map((producto) => {
                return  <Item key={producto.id} producto={producto}/>
                })}
            </>
        )
    }
export default  ItemList