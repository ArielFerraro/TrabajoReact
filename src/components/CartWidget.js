import React, {useContext} from 'react';
import logo from '..//imagen/carrito.svg'
import { cartContext } from './CartContext';


const CartWidget = () => {
    
    const { qtyProducto } = useContext(cartContext);

    return (
    <>
        <img src={logo} alt="carrito" />
        <p>{qtyProducto}</p>
    </>
    )
}
export default CartWidget