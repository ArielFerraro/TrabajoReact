import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer"
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { cartContext } from "./CartContext";
import { useContext } from "react";




    const ItemDetail = ({detalle, producto}) => {
    
        const [finalizarCompra, setFinalizarCompra] = useState(false)
        const {agregarProducto} = useContext(cartContext);    


        const onAdd = (cuenta) => {
        
            agregarProducto ({...producto, qty: cuenta});
            setFinalizarCompra(true)
            
        }
        
        return (
            <>  
                <div>
                    <h2>{detalle.nombre}</h2>
                    <img src={detalle.imagen} alt="remera" width="200px" />
                    <p>{detalle.descripcion}</p>
                    <p className="precio">{detalle.precio}</p>
                    
                    {finalizarCompra
                    ? <Link to="/cart">
                    <button>Finalizar compra</button>
                    </Link>
                    : <ItemCount stock={10} onAdd={onAdd} />}
                </div>
            </>
        )
    }
export default  ItemDetail




