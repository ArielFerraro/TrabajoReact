import  React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./ItemCount";
import productos from "../data/data"
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import ItemDetailContainer from "./ItemDetailContainer";

const promesa = new Promise((res, rej) => {
    setTimeout(() => {
    res(productos);
    }, 2000);
});


const ItemListContainer = () => {
    
    const [productos, setProductos] = useState ([]);
    const [loading, setLoading] = useState (false);

    useEffect(() =>{
        setLoading(true);
        promesa.then ((res) => {
            setLoading(false);
            setProductos(res);
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
               
                <ItemList productos ={productos} />
                <ItemCount stock = {5}/>
               
            </div>
        )
}


export default ItemListContainer

