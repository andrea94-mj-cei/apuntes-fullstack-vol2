import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export const Button = () => {
  
    const {theme, setTheme, nombre, toggleTheme} = useContext(ThemeContext);
  
    return(
      <>
      {/* <p>Hola soy {nombre}</p> */}
  
      <button onClick={toggleTheme}>light/dark</button>
  
      {/* para mandar información, siempre con una función de callback ()=> */}
      {/* <button onClick={()=>setTheme('dark')}>Activar modo oscuro</button>
      <button onClick={()=>setTheme('light')}>Activar modo claro</button> */}
      </>
    )
  }