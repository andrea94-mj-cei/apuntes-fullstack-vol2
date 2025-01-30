//EJEMPLO QUERY PARAMS (para usar este header tenemos que leer el queryparams)
export const Header = ({children}) => {
    return ( 
        <>
        <header>
        {children}
        <ul>
            <li><a href="./">Home</a></li>
            <li><a href="./?page=nosotros">Nosotros</a></li>
            <li><a href="./?page=contacto">Contacto</a></li>
        </ul>
        </header>
        </>
     );
}


//EJEMPLO CON PATH (para usar este header tenemos que leer el pathname)
export const Header2 = ({children}) => {
    return ( 
        <>
        <header>
        {children}
        <ul>
            <li><a href="./">Home</a></li>
            <li><a href="./nosotros">Nosotros</a></li>
            <li><a href="./contacto">Contacto</a></li>
        </ul>
        </header>
        </>
     );
}


