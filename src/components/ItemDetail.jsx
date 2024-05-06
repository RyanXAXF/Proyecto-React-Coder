import { ItemCount } from "./ItemCount"
import { useContext } from "react"
import { CartContext } from "../contexts/cartContext"

export const ItemDetail = ({product}) => {

    const {addItem} = useContext(CartContext)

    const add = (quantity) => {
        addItem(product, quantity)
    }

    return (
        <div className="detailListContainer">
            
            
            <img className="img-detailContainer" src={product.img} alt="s" />
            <div className="detail-info">
                <h1>{product.name}</h1>
                <div className="detailList-title">{product.title}</div>
                <div className="detailList-subtitle">{`Stock ${product.stock}`}</div> 
                <div>{`Precio ${product.price}`}</div> 
            </div>
            <ItemCount stock={product.stock} onAdd={add} />
        </div>
    )
}

