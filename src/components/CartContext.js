import React, { createContext, useEffect, useState } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({children}) => {

    const [ productos,setProductos ] = useState([])
    const [ qtyProducto, setQtyProducto] = useState(0);

    const getQtyProducto= () => {
        let qty = 0;
        productos.forEach(producto => {
            qty += producto.qty;
        } )
        setQtyProducto(qty)
    };

    useEffect(() =>{
        getQtyProducto(); 
    }, [productos])
    
    
    const  eliminarProducto = (id) => {
        setProductos(productos.filter(producto => producto.id !== id));
        
    };

    const agregarProducto = (producto) => {
        if (enCarrito(producto.id)) {
        const aux = [...productos];
        const found = aux.find(p => p.id === producto.id);
        found.qty += producto.qty;
        setProductos(aux);
        } else {
            setProductos([...productos, producto])
        }  
        };
        
    

    const enCarrito = (id)  => {
        return productos.some(producto => producto.id === id);
    };

    const limpiar = (id) => {
        setProductos([]);
        setQtyProducto(0);
    };

    return (
        <Provider value={{ productos, agregarProducto, eliminarProducto, limpiar, qtyProducto }}>
            {children}
        </Provider>
    )


}


export default CartCustomProvider
