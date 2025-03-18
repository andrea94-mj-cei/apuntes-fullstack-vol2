import { useState } from "react";

const Registro = () => {

    const [user, setUser] = useState([]);

    return ( 
        <>
        <h2>Registro</h2>
        <form action="post">
            <input type="text" placeholder="Nombre"/>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Contraseña"/>
            <input type="submit" />
        </form>
        </>
     );
}
 
export default Registro;