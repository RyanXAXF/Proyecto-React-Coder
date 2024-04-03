import { CardWidget } from "./CardWidget"
import "../navbar.css"
import { Link, NavLink } from "react-router-dom"
export const NavBar = () => {
    return(
        <>
            <nav className="navbarContainer">
            <div className="logoContainer">
            <img className="logo" src="./src/assets/logo.png" alt="logo de empresa" />
            <NavLink className={"title"} to="/" as={NavLink}>Gear Guitar</NavLink>
            </div>
            <ul className="navbar">
                <li><NavLink to="/category/guitar" as={NavLink}>Guitarras</NavLink></li>
                <li><NavLink to="/category/amp" as={NavLink}>Amplificadores</NavLink></li>
                <li><a className="link" href="">Contacto</a></li>
                <li>
                    <select className="select" name="productos" id="productos">

                        <option className="selectProductos" value="">Todos</option>
                        <option value="">Guitarras</option>
                        <option value=""><a href="/category/amplificadores">Amplificadores</a></option>
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