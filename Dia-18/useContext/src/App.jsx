import { useContext } from 'react';
import './App.css'

//importamos componentes
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
// import { Button } from './components/Button';


//importamos Context 
import { ThemeContext } from '@/context/ThemeContext';


function App() {
  
  const theme = useContext(ThemeContext);


  return (
    <>
  <div className={`container ${theme}`}>
          {/* boton de logout */}
          <Header/>

            {/* Saludar al usuario o Boton de Login */}
          <Content/> 

          {/* Botón para cambiar el modo de claro / oscuro */}
          <Footer/>

  </div>
    </>
  )
}

export default App

