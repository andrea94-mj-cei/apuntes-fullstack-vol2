import { TarjetaUsuario } from "./components/TarjetaUsuario";
import { TarjetaUsuario2, Avatar } from "./components/TarjetaUsuario2";

const App = () => {

  const userData={
    nombre: "Marta",
    edad: 15,
    ocupacion: "estudiante"
  }

  const Items = [
    { id: "a", name:"item1"},
    { id: "b", name:"item2"},
    { id: "c", name:"item3"},
    { id: "d", name:"item4"},
  ]

  return ( 
    <>
    <h1>Soy App</h1> 
    <TarjetaUsuario {...userData}/>
                    {/* Spread operator: genera una copia de todas las propiedades (nombre, edad, ocupación) */}
    <TarjetaUsuario2/>

    <ul>
    {
      Items.map( (item, i) => (
        <li key={i}>  {item.name}  </li>
      ))
    }
    </ul>
    </>
   );
}
 
export default App;




