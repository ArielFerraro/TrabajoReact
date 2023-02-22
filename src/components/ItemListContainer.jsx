import  React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { db } from "../firebase/firebase";
import { getDocs, collection, } from "firebase/firestore"
import "./ilc.css"





const ItemListContainer = () => {
    
    const [productos, setProductos] = useState ([]);
    const [loading, setLoading] = useState (false);

    useEffect(() =>{

        const productoCollection = collection(db,`Productos`);
        getDocs(productoCollection)
        .then(resultado => {
            const lista = resultado.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            
            setProductos(lista);
            
        })
        },[]);
    

    if (loading) {
        return (
            <>
            <h1>Cargando...Espere unos segundos</h1>
            </>
        );

    }
        return (
            <div className="espacioitems">
                <ItemList productos ={productos} />
            </div>
        )
}


export default ItemListContainer

