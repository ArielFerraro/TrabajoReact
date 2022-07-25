import React from "react";
import {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import detalle from "../data/DataDetail";
import { db } from "../firebase/firebase";
import { getDoc, collection, doc } from "firebase/firestore"






const ItemDetailContainer = () => {
    
    const [mostrarDetalle, setMostrarDetalle] = useState (null);
    const [loading, setLoading] = useState (false);
    
    const { productoId } = useParams()

    useEffect(() =>{
        const productoCollection = collection(db,`Productos`);
        const refDoc = doc(productoCollection, productoId);
        getDoc(refDoc)
        .then(resultado => {
            const producto = {
                id: resultado.id,
                ...resultado.data(),
            }
            setMostrarDetalle(producto);
        })
    },[productoId]);

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