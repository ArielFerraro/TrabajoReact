import React from "react";
import {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";




const promesa = new Promise((res, rej) => {
    setTimeout((detalle) => {
    res(detalle);
    }, 2000);
});



const ItemDetailContainer = () => {
    
    const [detalle, setDetalle] = useState ([]);
    const [loading, setLoading] = useState (false);

    useEffect(() =>{
        setLoading(true);
        promesa.then ((res) => {
            setLoading(false);
            setDetalle(res);
        });
    },[]);

    if (loading) {
        return (
            <>
            <h1>Cargando...Espere unos segundos</h1>
            </>
        );

    }
        return (
            <div className="container">
                
                <ItemDetail detalle={detalle} />
                
            </div>
        )
}


export default ItemDetailContainer