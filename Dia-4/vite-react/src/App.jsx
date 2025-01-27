

function App() {

  return (
    <>
    <Header/>
    <h3>App en REACT</h3>
      <Alumno/>
      <br />
      <Alumno/>
      <br />
      <MiBoton/>
    </>
  )
}

//Header

const Header = () => {
  return(
    <header>
      <h1>Soy header</h1>
      <nav>
        <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
      </nav>
      
    </header>
  )
}

//Componente de botón personalizado
const MiBoton = () => {
  return(
    <button>Soy un botón</button>
  )
}

//Componente de alumno
const Alumno = ()  =>{
  const nombre = "María";
  return(
    <span>Soy el componente Alumno y mi nombre es {nombre}</span>
  )
}

export default App
