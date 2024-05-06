import { createContext, useState } from "react"
import { isElement } from "react-dom/test-utils"

export const CartContext = createContext()

export const Provider = ({children}) => {
    const [items, setItems] = useState([])

    const clear = () => setItems([])

    const removeItem = (id) => {
        const filtered = items.filter((item) => item.id !== id)
        setItems(filtered)
    }
    
    const addItem = (item, quantity) => {
        const ifExist = items.some((i) => i.id === item.id)

        if(ifExist){
            const updateItems = items.map((i) => {
                if(i.id === item.id) {
                    return{
                        ...i,
                        quantity: i.quantity+ quantity,
                    }
                } else {
                    return i
                }
                
            } )
            setItems(updateItems)
        } else {
            setItems([...items, {...item, quantity}])
        }

        
    }


    return (
        <CartContext.Provider value={{addItem, removeItem, items, clear}}>
            {children}
        </CartContext.Provider>
    )
}




 
