import { useState } from 'react'
import './css/App.css'

//importaciones datos (MockData)
import { productos } from '@/datos/datos'
import { testimonios } from '@/datos/datos'

//importaciones componentes
import { ListaProductos } from '@/components/productos/ListaProductos'
import { ListaTestimonios } from '@/components/testimonios/ListaTestimonios'




function App() {

  return (
    <>
    <h1>Lista de productos</h1>
    <ListaProductos productos={productos}/>

    <h1>Testimonios</h1>
    <ListaTestimonios testimonios={testimonios}/>
    </>
  )
}

export default App
