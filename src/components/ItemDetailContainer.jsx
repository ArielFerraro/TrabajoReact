import React from "react";
import {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import detalle from "../data/DataDetail";


const promesa = new Promise((res, rej) => {
    setTimeout(() => {
    res(detalle);
    }, 2000);
});



const ItemDetailContainer = () => {
    
    const [mostrarDetalle, setMostrarDetalle] = useState (null);
    const [loading, setLoading] = useState (false);
    
    const { itemid } = useParams()

    useEffect(() =>{
        setLoading(true);
        promesa.then ((res) => {
            setLoading(false);
            const detalle = res.find(item => item.id == itemid)
            setMostrarDetalle(detalle); 
        });
    },[itemid]);

    if (loading) {
        return (
            <>
            <h1>Cargando...Espere unos segundos</h1>
            </>
        );

    }
        return ( 
        <>
        {mostrarDetalle && <ItemDetail detalle={mostrarDetalle}/>}
        </>
        )
}


export default ItemDetailContainer