
import './App.css'

//importar cosas del router
import { BrowserRouter, Routes, Route } from 'react-router'
import {Link, NavLink} from 'react-router-dom'
//diferencia entre Link y NavLink: (con la etiqueta NavLink automáticamente lo pone con la clase active, usar ese para enlaces internos y Link para enlaces externos)

//importar páginas
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/blog" element={ <BlogPost/> }/>
        <Route path="/blog/:blogId" element={ <BlogPost/> }/>
        {/* este último con los dos puntos indica que va a ser una variable */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
