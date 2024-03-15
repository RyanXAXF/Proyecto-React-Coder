import React from 'react'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import "./index.css"

export function App (){
    return (
        <>
            <NavBar />
            <ItemListContainer greeting="Hola" />
        </>
    )
}
