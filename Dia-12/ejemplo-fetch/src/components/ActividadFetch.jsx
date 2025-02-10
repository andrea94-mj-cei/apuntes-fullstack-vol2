import {useState, useEffect} from 'react'
import { FetchCard } from "./FetchCard";

export const ActividadFetch = () => {

    const [usuario, setUsuario] = useState([]);

    // const {loading, setloading} = useState(true);


    const fetchData = async () =>{
        try{

            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();
            setUsuario(data);
            


        }catch(error){
            console.error("Error en el fetch", error);
        }
    };

    // useEffect = (()=>{
    //     fetchData();
    // }, []);


    return ( 
        <>
        <ul>
        {
            usuario.map( users =>(
                <li key={users.id}></li>
            ))
        }
        </ul>
        </>
     );
}