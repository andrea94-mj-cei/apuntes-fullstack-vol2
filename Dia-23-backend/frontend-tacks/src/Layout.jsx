import React, { useState, useEffect } from 'react';
import './css/Layout.css';

const Layout = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  useEffect(() => {
    // Obtener las tareas del usuario 1
    fetch('http://localhost:3000/api/v1/user/1/tareas')
      .then(response => response.json())
      .then(data => {
        setTareas(data.data);
      })
      .catch(error => {
        console.error('Error al obtener las tareas:', error);
      });
  }, []);

  const handleCheckboxChange = (tareaId, isCompletada) => {
    // Actualizar el estado de la tarea en el backend
    fetch(`http://localhost:3000/api/v1/user/1/tareas/${tareaId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isCompletada: !isCompletada })
    })
    .then(response => response.json())
    .then(data => {
      // Actualizar el estado de la tarea en el frontend
      setTareas(tareas.map(tarea => 
        tarea.id === tareaId ? { ...tarea, isCompletada: !isCompletada } : tarea
      ));
    })
    .catch(error => {
      console.error('Error al actualizar la tarea:', error);
    });
  };

  const handleNuevaTareaChange = (event) => {
    setNuevaTarea(event.target.value);
  };

  const handleNuevaTareaSubmit = (event) => {
    event.preventDefault();
    // Crear la nueva tarea en el backend
    fetch('http://localhost:3000/api/v1/user/1/tareas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tarea: nuevaTarea })
    })
    .then(response => response.json())
    .then(data => {
      // Agregar la nueva tarea al estado de las tareas
      setTareas([...tareas, data.data]);
      setNuevaTarea(''); // Limpiar el campo de entrada
    })
    .catch(error => {
      console.error('Error al crear la nueva tarea:', error);
    });
  };

  return (
    <>
      <div>
        <h3>Lista de tareas del usuario 1</h3>
        <ul>
          {tareas.length > 0 ? (
            tareas.map(tarea => (
              <li key={tarea.id}>
                <div>Tarea: {tarea.tarea}</div>
                <form action="">
                  <input 
                    type="checkbox" 
                    checked={tarea.isCompletada} 
                    onChange={() => handleCheckboxChange(tarea.id, tarea.isCompletada)} 
                  />
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
        <form onSubmit={handleNuevaTareaSubmit}>
          <input 
            type="text" 
            value={nuevaTarea} 
            onChange={handleNuevaTareaChange} 
            required 
          />
          <input type="submit" value="Crear Tarea" />
        </form>
      </div>
    </>
  );
};

export default Layout;
