import cart from '../img/basket-fill.svg'
import ItemListContainer from './ItemListContainer'

const CartWidget = () => {
    return(
        < >
        <img className='cart' src={cart} alt='cart' />
        < ItemListContainer />
        </>
    )
}
export default CartWidget