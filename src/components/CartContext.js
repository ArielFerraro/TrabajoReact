import React, { createContext, useEffect, useState } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({children}) => {

    const [ producto,setProducto ] = useState([])
    const [ qtyProducto, setQtyProducto] = useState(0);

    const getQtyProducto= () => {
        let qty = 0;
        producto.forEach(producto => {
            qty += producto.qty;
        } )
        setQtyProducto(qty)
    };

    useEffect(() =>{
        getQtyProducto(); 
    }, [producto])
    
    
    const  eliminarProducto = (id) => {
        setProducto(producto.filter(producto => producto.id !== id));
        
    };

    const agregarProducto = (producto) => {
        if (enCarrito(producto.id)) {
            const found = producto.find(p => p.id === producto.id);
            const index = producto.indexOf(found);
            const aux = [...producto];
            aux[index].qty += producto.qty;
            setProducto(aux);
        }   
        };
        
    

    const enCarrito = (id)  => {
        return producto.some(producto => producto.id === id);
    };

    const limpiar = (id) => {
        setProducto([]);
        setQtyProducto(0);
    };

    return (
        <Provider value={{ producto, agregarProducto, eliminarProducto, limpiar, qtyProducto }}>
            {children}
        </Provider>
    )


}


export default CartCustomProvider
