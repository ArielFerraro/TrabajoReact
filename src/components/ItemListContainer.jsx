import  React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./ItemCount";
import productos from "../data/data"
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import ItemDetailContainer from "./ItemDetailContainer";
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where} from "firebase/firestore"





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
        });
    

    if (loading) {
        return (
            <>
            <h1>Cargando...Espere unos segundos</h1>
            </>
        );

    }
        return (
            <div className="container">
                <>
                <ItemList productos ={productos} />
                
                
                
                </>
            </div>
        )
}


export default ItemListContainer

