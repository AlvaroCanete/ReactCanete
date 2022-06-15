import logo from'../img/imagenlogo.png'
import cart from '../img/basket-fill.svg'
import'./Header/Navbar.css'
const Navbar = () => {
    return(
        <nav className='navegador'>
            <img className='logo' src={logo} alt="logo" />
            <nav>
                <a href="">Productos</a>
                <a href="">Colecciones</a>
                <a href="">Tiendas</a>
                <a href="">Info</a>
            </nav>
            <img className='cart' src={cart} alt='cart' />
        </nav>
    )
}
export default Navbar