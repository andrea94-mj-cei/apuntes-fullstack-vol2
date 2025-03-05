import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const backendURL = import.meta.env.VITE_BACKEND;

  useEffect(() =>{
    const obtenerDatos = () =>{
      fetch(`${backendURL}/api/v1/tareas`)
    }

    obtenerDatos();

  },[])

  return (
    <>
     
    </>
  )
}

export default App
