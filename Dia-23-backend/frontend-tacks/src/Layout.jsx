import { useEffect, useState } from 'react'
import './css/Layout.css'


function Layout() {
  const backendURL = import.meta.env.VITE_BACKEND;

  const [usuarios, setUsuarios] = useState([]);
  const [uid, setUid] = useState(1); //uid = user id
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    obtenerUsuario();
    obtenerTareas();
    // crearTarea();
  }, [backendURL]);

  //obtener usuarios:
  const obtenerUsuario = async () => {
    try {
      const response = await fetch(`${backendURL}/api/v1/usuario`);
      const responsedata = await response.json();

      if (responsedata.status === "ok") {
        setUsuarios(responsedata.data);
      } else {
        console.error('Error al traer los usuarios');
      }
    } catch (error) {
      console.error('Error al traer los datos:', error);
    }
  };

  const usuarioFiltrado = usuarios.find(usuario => usuario.id === uid);

  //obtener tareas:
  const obtenerTareas = async () => {
    try {
      const response = await fetch(`${backendURL}/api/v1/user/${uid}/tareas`);
      const responsedata = await response.json();

      if (responsedata.status === "ok") {
        setTareas(responsedata.data);
      } else {
        console.error('Error al traer las tareas');
      }
    } catch (error) {
      console.error('Error al traer los datos:', error);
    }
  };




  
  

  return (
    <>
      <div>
        <h3>Usuario 1</h3>
        <ul>
          {usuarioFiltrado ? (
            <li key={usuarioFiltrado.id}>
              <div>Nombre: {usuarioFiltrado.nombre}</div>
              <div>Email: {usuarioFiltrado.email}</div>
            </li>
          ) : (
            <li>No se encontró el usuario con id 1</li>
          )}
        </ul>
      </div>

      <br />

      <div>
        <h3>Lista de tareas del usuario 1</h3>
        <ul>
          {tareas.length > 0 ? (
            tareas.map(tarea => (
              <li key={tarea.id}>
                <div>Tarea: {tarea.tarea}</div>
                <form action="">
                  <input type="checkbox" />
                </form>
              </li>
            ))
          ) : (
            <li>No hay tareas disponibles</li>
          )}
        </ul>
      </div>
      <div>
        <h3>Crea una nueva tarea para el usuario</h3>
        <form action="" method='post'>
          <input  type="text" />
          <input type="submit"/>
        </form>
      </div>
    </>
  );
}

export default Layout;
