import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import './App.css'
import { Header } from './components/Header';
import { Header2 } from './components/Header';
import { Footer } from './components/Footer';

function App() {

  //Obtener un query param desde la URL "index.html?page=about"
  const params = new URLSearchParams(window.location.search);
  const selector = params.get('page') || "home"; //por defecto
  console.log("query Param es: ", selector)


  //También podría utilizar el Path después del "/"
  const pathValue = window.location.pathname.slice(1) || "home";
  console.log(window.location.pathname, "=>", pathValue);
  




  // const selector = "contacto";

  let page; // la página a imprimir

  switch(pathValue){
    case 'nosotros' : page = <AboutUs/>; break;
    case 'contacto' : page = <Contact/>; break;
    default: page = <Home/>;
  }

  return (
    <>
      <Header>Soy Header con Query Params</Header>
      <Header2>Con PathName</Header2>
      {page}
      <Footer>Soy Footer</Footer>

      {/* { page == "home" ? <Home/> : <Contacto/> } */}
      {/* { selector=="home" && <Home/> }
      { selector=="contacto" && <Contact/> }
      { selector=="nosotros" && <AboutUs/> } */}
      {/* <Home/> */}
      {/* <Contacto/> */}
    </>
  )
}



export default App
