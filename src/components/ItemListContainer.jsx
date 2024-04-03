import { useEffect, useState } from "react"
import data from "../data/products.json"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const {id} = useParams()
    console.log(id)

    useEffect(() =>{
        const get = new Promise((resolve, reject)=> {
            setTimeout(() => resolve(data), 2000)
        })
        get.then((data)=>{
            if (!id) {
                setProducts(data)
            } else {
                const filtered = data.filter(p => p.category === id)
                setProducts(filtered)
            }
            
        })

    }, [id])
    return(
        <div className="itemListContainer">
            <ItemList products={products} />
            
        </div>
    )
        
    
}