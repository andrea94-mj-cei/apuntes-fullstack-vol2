import { Producto } from "./Producto";

export const ListaProductos = ({productos}) => {
    return ( 
        <>
        <div className="lista-productos">
        {
            productos.map((producto, id)=>(
                <Producto key={id} {...producto}/>
            ))
        }
        </div>
        </>
     );
}