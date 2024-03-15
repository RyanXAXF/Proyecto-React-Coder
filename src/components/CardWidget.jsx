import "../navbar.css"
export const CardWidget = () => {
    return (
        <div className="carrito">
            <img className="carritoImg" src="./src/assets/carrito.png" alt="carrito imagen" />
            <span className="carritoContador">0</span>
        </div>
        
    )
}