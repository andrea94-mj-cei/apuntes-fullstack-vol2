//deconstrucción<
export const TarjetaUsuario = ({nombre, edad, ocupacion}) => {

    // Opción 2 de condicional (Si la edad es mayor que 18 es mayor de edad, si no es menor de edad)
    const mensaje = edad > 18 ? "es mayor de edad" : "es menor de edad";

    const isMayor = true;

    const styleUsuario = {color:"pink", backgroundColor: "white"}

    const styleError = {color:"red", fontSize:"20px"}

return ( 
    <>
    <h2 style={styleUsuario} >Tarjeta Usuario</h2>
    <p>Mi nombre es: {nombre}</p>
    <p>Mi edad es: {edad}</p>

    <h3 style={styleError}> Ha ocurrido un error </h3>

        {/* Opción 1 de condicional */}
    { edad >= 18 ? <p>Es mayor de edad</p>
                 : <p>Es mayor de edad</p>
    
    }

    {/* Te devuelve el condicional de la opción 2 */}
    <p>{mensaje}</p>


    {/* Opción 3 de condicional (Se tienen que cumplir todas las condiciones (&&) y solo se muestra la última condición) */}
    { isMayor && "soy mayor de edad" && "25" }
    {/* Uso real */}
    { isMayor && <p>Marta es mayor de edad</p> }

    {/* Se tiene que cumplir una condición y se muestra la primera */}
    { "hola" || true || isMayor || <p>Es mayor de edad</p> }

    <p>Mi ocupación es: {ocupacion}</p>
    </>
    );
}