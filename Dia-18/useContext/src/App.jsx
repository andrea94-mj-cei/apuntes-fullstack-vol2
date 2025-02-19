import {useContext, createContext, useState} from 'react'

import './App.css'

//creamos el contexto para almacenar nuestro estado
//lo exportamos para poder importarlo en el componente que se necesite
export const ThemeContext = createContext(null);
const nombre = "Andrea"



function App() {
  
  //para guardar el estado del tema (oscuro)
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    
    setTheme(prevState => (prevState === 'dark' ? 'ligth' : 'dark'))  
  }

  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme, nombre, toggleTheme}}>
      <div>
        <h1>Mi tema actual es: {theme}</h1>
      </div>
        <Button/>
    </ThemeContext.Provider > 
    <p>Este párrafo está fuera del contexto</p>
    </>
  )
}

export default App

const Button = () => {
  
  const {theme, setTheme, nombre, toggleTheme} = useContext(ThemeContext);

  return(
    <>
    <p>Hola soy {nombre}</p>

    <button onClick={toggleTheme}>light/dark</button>

    {/* para mandar información, siempre con una función de callback ()=> */}
    <button onClick={()=>setTheme('dark')}>Activar modo oscuro</button>
    <button onClick={()=>setTheme('light')}>Activar modo claro</button>
    </>
  )
}