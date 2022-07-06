import React from "react";
import Detalle from "./Detalle";



const ItemDetail = ({detalle}) => {
    return (
            <>  
                {detalle.map((detalle) => {
                return  <Detalle key={detalle.id} detalle={detalle}/>
                })}
            </>
        )
    }
export default  ItemDetail




