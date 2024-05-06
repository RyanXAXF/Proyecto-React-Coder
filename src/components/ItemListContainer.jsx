import { useEffect, useState } from "react"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"
import { getFirestore,
    getDocs,
    collection,
    query,
    where
 } from "firebase/firestore"

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const {id} = useParams()
    console.log(id)


    useEffect(() =>{
            const db = getFirestore()
            let refCollection;
            if(!id){
                refCollection = collection(db, "items")
            } else {
                refCollection = query(collection(db, "items"), where("categoryId", "==", id))
            }
           
    
            getDocs(refCollection).then((snapshot) => {
                setProducts(
                    snapshot.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()}
                    } )
                    
                )
            } )

    }, [id])
    return(
        <div className="itemListContainer">
            <ItemList products={products} />
            
        </div>
    )
        
    
}