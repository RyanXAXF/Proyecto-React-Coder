import { useState } from "react"

export const ItemCount = ({onAdd, stock}) => {

    const [quantity, setQuantity] = useState(1)

    const handleDecrease = () => {
        if(quantity > 1 ) setQuantity((prev) => prev - 1)
    }

    const handleIncrease = () => {
        if(stock > quantity) setQuantity((prev) => prev + 1)
    }

    const handleAdd = () => {
       onAdd(quantity)
       setQuantity(1)
    }
    
    return (<>
    <div className="itemCount">
        <div onClick={handleDecrease}><button className="item-btn">-</button></div>
        <input className="count" readOnly value={quantity} type="number"/>
        <div onClick={handleIncrease}><button className="item-btn">+</button></div>
        <button className="itemCount-btn" onClick={handleAdd} type="button">Agregar al carrito</button>
    </div>
    
    </>)
}
