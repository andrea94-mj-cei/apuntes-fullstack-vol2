//diferente a useParams
import { useSearchParams } from "react-router";

const UsersPage = () => {

    let [searchParams] = useSearchParams();

    //recibimos el método get
    const nombre = searchParams.get("name");
    const id = searchParams.get("id");

    return ( 
        <>
        <h2>Página de {nombre}</h2>
        id: {id}
        </>
     );
}
 
export default UsersPage;