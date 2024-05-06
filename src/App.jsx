import React, { useEffect } from 'react'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from './contexts/cartContext'
import { Cart } from './components/Cart'


export function App (){
    
    return (
        <Provider>
            <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/category/:id' element={<ItemListContainer/>} />
                <Route path='/item/:id' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
            </BrowserRouter>
        </Provider>
    )
}
