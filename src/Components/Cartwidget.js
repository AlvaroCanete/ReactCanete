import React from 'react';
import cart from '../img/basket-fill.svg'


const CartWidget = () => {
    return(
        <>
        <button>
        <img className='cart' src={cart} alt='cart' />
        </button>
        </>
    )
}
export default CartWidget