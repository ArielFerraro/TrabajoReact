import React, {useContext} from 'react';
import logo from '..//imagen/carrito.svg'
import { cartContext } from './CartContext';
import './NavBar.css'


const CartWidget = () => {
    
    const { qtyProducto } = useContext(cartContext);

    return (
    
        <div className='carrito'>
           <img src={logo} alt="carrito" />
           <span className='numerito'>{qtyProducto}</span>
        </div>
    )
}
export default CartWidget