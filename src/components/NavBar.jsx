import { CardWidget } from "./CardWidget"
import "../navbar.css"
export const NavBar = () => {
    return(
        <>
            <nav className="navbarContainer">
            <div className="logoContainer">
            <img className="logo" src="./src/assets/logo.png" alt="logo de empresa" />
            <h1>King Ropa</h1>
            </div>
            <ul className="navbar">
            <li><a className="link" href="">Inicio</a></li>
                <li><a className="link" href="">Sobre Nosotros</a></li>
                <li><a className="link" href="">Contacto</a></li>
                <li>
                    <select className="select" name="productos" id="productos">
                        <option className="selectProductos" value="">Productos</option>
                        <option value="">Camisas</option>
                        <option value="">Pantalones</option>
                        <option value="">Camperas</option>
                    </select>
                </li>
                <li><CardWidget /></li>
                <li>
                    
                    <form action="">
                        <input className="inp inp--src" type="text" placeholder="Search"/>
                        <button className="btn btn--src" type="submit">Search</button>
                    </form>
                </li>
            </ul>
        </nav>
        </>
        
    )
}