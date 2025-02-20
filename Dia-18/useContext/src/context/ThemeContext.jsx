import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) =>{

    const [theme, setTheme] = useState("dark");
    const nombre = "Andrea"

    const toggleTheme = () => {

        setTheme(prevState => (prevState === 'dark' ? 'ligth' : 'dark'))
    }
    return(
        <>
        <ThemeContext.Provider value = {{theme, nombre, setTheme, toggleTheme}}>
            {children}
            <p>Tu tema seleccionado es {theme}</p>
        </ThemeContext.Provider>
        </>
    )}
    