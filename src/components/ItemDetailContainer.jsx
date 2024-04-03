import { useEffect, useState } from "react"
import data from "../data/products.json"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {id} = useParams()
    useEffect(() =>{
        const get = new Promise((resolve, reject)=> {
            setTimeout(() => resolve(data), 2000)
        })
        get.then((data)=>{
            const filter = data.find(p => p.id === Number(id))
            setProduct(filter)
        })

    }, [id])


    if (!product) return <div>Loading</div>
    return(
        <div className="itemListContainer">
            <h1>{product.name}</h1>
            <img src={product.img} alt="s" />
        </div>
    )
        
    
}