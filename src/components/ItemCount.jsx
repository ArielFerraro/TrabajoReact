import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './ItemCount.css'

const ItemCount = ({stock}) =>{
    const [cuenta, setCuenta] = useState (1)

    const sumar = () => {
    if (cuenta < stock) {
        setCuenta (cuenta + 1)
    }
}

    const restar = () => {
        if (cuenta > 1) {
            setCuenta (cuenta - 1)
        }
        
    }

    return (
    <>
    <p>{cuenta}</p>
    <Button  variant="dark" onClick = {restar}>-</Button>
    <Button  variant="dark" onClick = {sumar}>+</Button>
    <Button variant="dark"> Ver Detalle Del Producto</Button>
    </>
    )
    


}

export default ItemCount