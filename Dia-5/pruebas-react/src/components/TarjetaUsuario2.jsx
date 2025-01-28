export const TarjetaUsuario2 = (props) => {
    return ( 
          <>
            <h2>Mi nombre es: {props.nombre}</h2>
            <Avatar {...props}/>
          </> 
          );
  }

export const Avatar = ({nombre}) => {
    return ( 
        <h4>{nombre="Marta"}</h4>
     );
}