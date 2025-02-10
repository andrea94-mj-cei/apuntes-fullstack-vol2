import { useState, useEffect } from 'react'

export const FetchUser = () => {

    const [users, setUsers] = useState([]);

    const {loading, setLoading} = useState(true);

    const loadData = async () =>{
      try{
  
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok) {
          throw new Error("Error al obtener usuarios");
        }
        const data = await response.json();
        setUsers(data); //guardamos los valores
        setLoading(false);
  
      } catch (error) {
        setLoading(false);
        console.error("Error en el fetch", error);
      }
    }
    useEffect (() =>{
  
      loadData();
      
  
    }, [])
    return ( 
        <>
        <h2>Lista de usuarios</h2>
        {
            loading ? ( 
                <p>Buscando datos...</p>
             )
                    : ( 
                        <ul>
                        {
                            users.map( user =>(
                                <li key={user.id}>{user.name}</li>
                            ))
                        }
                        </ul>
                     )
        }
       
        </>
     );
}