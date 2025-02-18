
import './App.css'

//importar cosas del router
import { BrowserRouter, Routes, Route } from 'react-router'
import {Link, NavLink} from 'react-router-dom'
//diferencia entre Link y NavLink: (con la etiqueta NavLink automáticamente lo pone con la clase active, usar ese para enlaces internos y Link para enlaces externos)

//importar páginas
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'
import Users from './pages/Users'
function App() {


  return (
    <>
      <BrowserRouter>

      {/* Ejemplos de link de navegación
      - backend.com/api/usuario/25/edit
      - backend.com/api/usuario/13/edit
       */}

       {/* Ejemplos de configuración de ruta
       - backend.com/api/usuario/uid/edit 
       */}
        <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/blog" element={ <BlogPost/> }/>
        <Route path="/blog/:blogId" element={ <BlogPost/> }/>
        <Route path="/users/" element={ <Users/> }/>
        {/* este último con los dos puntos indica que va a ser una variable */}
        </Routes>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> isActive ? "text-red-500" : "text-back"} to="/blog">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog/5">Blog5</NavLink>
          </li>
          <li>
            <NavLink to="/blog/6">Blog6</NavLink>
          </li>
          <li>
            <NavLink to="/blog/hola/rojo">Jaume</NavLink>
          </li>
          <li>
            <NavLink to="/users/?id=25&name=ramiro">Ramiro</NavLink>
            <NavLink to="/users/?id=31&name=andrea">Andrea</NavLink>
          </li>
          </ul>
      </nav>

      </BrowserRouter>
    </>
  )
}

export default App
