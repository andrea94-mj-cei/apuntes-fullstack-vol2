

export const FetchCard = ({nombre, apellido, imagen}) => {

    return ( 
        <>
        <div className="Card-container">
            <img src={imagen} alt={nombre} />
            <div>
                <h2>Nombre: {nombre}</h2>
                <h3>Apellido: {apellido}</h3>
                <p>Edad: {edad}</p>
            </div>
        </div>
        </>
     );
}