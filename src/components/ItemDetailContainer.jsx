import React from "react";
import {useState} from "react";
import ItemDetail from "./ItemDetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const objetoDetalle =  {
    nombre: "Remera Rey Leon",
    imagen: "http://d3ugyf2ht6aenh.cloudfront.net/stores/440/495/products/remeras-leon-con-corona1-f3fef1574aa2aef7c915987989224604-640-0.png",
    id: 1,
    descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis commodi ea consequuntur necessitatibus itaque totam perspiciatis debitis nulla illo incidunt, magni asperiores enim eligendi quaerat magnam cupiditate rerum ex atque.",
    precio: "$2000",
};



const promesa = new Promise((res, rej) => {
    setTimeout(() => {
    res(objetoDetalle);
    }, 2000);
});



const ItemDetailContainer = () => {
    
    const [mostrarDetalle, setMostrarDetalle] = useState (null);
    const [loading, setLoading] = useState (false);


    const mostrar = mostrarDetalle && <ItemDetail detalle={mostrarDetalle}/>;

    const funcionMostrar =() =>{
        setLoading(true);
        promesa.then ((res) => {
            setLoading(false);
            setMostrarDetalle(res);
        });
    };

    if (loading) {
        return (
            <>
            <h1>Cargando...Espere unos segundos</h1>
            </>
        );

    }
        return ( 
        <>
        <button onClick={funcionMostrar}>ver detalle</button>
        {mostrar}
        </>
        )
}


export default ItemDetailContainer