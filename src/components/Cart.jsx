import { useContext, useState } from "react"
import { CartContext } from "../contexts/cartContext"
import { getFirestore, collection, addDoc } from "firebase/firestore"

const initialValues = {
    name: "",
    celu: "",
    email: ""
}



export const Cart = () => {

    const [values, setValues] = useState(initialValues)

    const {clear, items, removeItem} = useContext(CartContext)

    const total = () => 
        items.reduce((acc, item) => acc + item.quantity * item.price, 0)
    
    const handleChange = (ev) => {
        setValues((prev) => {
            return {
                ...prev,
                [ev.target.name]: ev.target.value
            }
        })
    }

    const handleSubmit = ()  => {
        const order = {
            buyer: values,
            items,
            total: total()
        }
        console.log(order)

        const db = getFirestore()
    const orderCollection = collection(db, "orders")
    addDoc(orderCollection, order).then(({id}) => {
        if (id) {
            alert("Gracias por su compra!")
        }
    } ).finally(() => {clear(), setValues(initialValues)} )
    }

    const handleClear = (id)  => clear(id)
    const handleRemove = (id)  => removeItem(id)

    return(<>
    <h1>Productos</h1>
    {
        items.map((i) => {
            return (
                <ul key={i.title}>
                    <li>Prod: {i.title}</li>
                    <li>cant: {i.quantity}</li>
                    <li>$ {i.price}</li>
                    <li onClick={() => handleRemove(i.id)}>
                        <button className="btn-eliminar">Eliminar</button>
                    </li>
                </ul>
            )
        })
    }
    <div>Total: {total()}</div>
    <button className="btn-vaciar" onClick={handleClear}>Vaciar Carrito</button>
    {items?.length > 0 && <form className="formContainer">
        <label>Nombre</label>
        <input className="form-input" type="text" name="name" value={values.name} onChange={handleChange} />
        <label>Celu</label>
        <input className="form-input" type="text" name="celu" value={values.celu} onChange={handleChange} />
        <label>Email</label>
        <input className="form-input" type="email" name="email" value={values.email} onChange={handleChange} />
        <button className="btn-submit" type="button" onClick={handleSubmit}>Finalizar Compra</button>
    </form>}
    </>)
}