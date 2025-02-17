
import './App.css'

//importar cosas del router
import { BrowserRouter, Routes, Route } from 'react-router'

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
