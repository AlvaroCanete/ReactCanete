import logo from'../img/imagenlogo.png'
import CartWidget from './CartWidget'
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
            < CartWidget />
        </nav>
    )
}
export default Navbar