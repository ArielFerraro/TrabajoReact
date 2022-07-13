import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer"
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useState } from "react";
import agregarCarrito from "./ItemCount";



    const ItemDetail = ({detalle}) => {
    
        const [finalizarCompra, setFinalizarCompra] = useState(false)
            
        const onAdd = (cuenta) => {
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
                    : <ItemCount initial={1} stock={5} onAdd={onAdd} />}
                    </div>
            </>
        )
    }
export default  ItemDetail




