import "../navbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../contexts/cartContext"


export const CardWidget = () => {

    const {items} = useContext(CartContext)
    const total = items.reduce((acc, elem) => acc + elem.quantity, 0 )

    return (
        <Link to="/cart" className="carrito">
            <img className="carritoImg" src="./src/assets/carrito.png" alt="carrito imagen" />
            <span className="carritoContador">{total}</span>
        </Link>
        
    )
}