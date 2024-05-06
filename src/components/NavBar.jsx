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
                <li><NavLink to="/category/pedal" as={NavLink}>Pedales</NavLink></li>
                <li><CardWidget /></li>
                <li>
                    
                    
                </li>
            </ul>
        </nav>
        </>
        
    )
}