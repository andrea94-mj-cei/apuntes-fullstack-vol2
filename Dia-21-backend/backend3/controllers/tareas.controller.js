//importamos lista tareas desde data.js
import { response } from 'express';
import listaTareas from '../db/data.js'; 
//en este archivo es donde tenemos el CRUD

//siempre que hagamos una respuesta vamos a recibir esto:
const responseAPI = {
    data: [],
    msg: "",
    status: "ok",
    cant: null
}

//Create
export const createTarea = (req, res, next)=>{
    
    const datos = req.body;
    //crea un nuevo id entre el 0 y el 100
    const newId = Math.floor(Math.random()*100);
    const newTarea = {
        id: newId,
        tarea : datos.tarea
    }
    console.log("Nueva tarea es:,", newTarea);

    listaTareas.push(newTarea);

    responseAPI.msg="Tarea creada correctamente";
    responseAPI.data = newTarea;

    res.json(responseAPI);

    //(datos enviados en el request por el usuario en json, se leen con req.body) 
    //{
    //    "tarea": "Esta es una nueva tarea",
    //    "time": "Wed, 21 Oct 2015 18:27:50 GMT"
    //}

}

//GetAllTareas
export const getAllTareas = (req, res, next)=>{
    //devuelvo las tareas de la db

    try{
        responseAPI.msg="Aquí tienes todas tus tareas"
        responseAPI.data=listaTareas
        responseAPI.cant = listaTareas.length;

        nombre="juan";
    
        res.json(responseAPI)

    }catch(error){
        next(error);
    }
}

//GetTarea
export const getTarea = (req, res, next)=>{
    //"http://localhost:3000/api/v1/tareas/:idtarea"
    const {idtarea} = req.params; 

    //busco la tarea
    const tuTarea = listaTareas.find( t => idtarea == t.id );

    //si no encuentra tarea...
    if(!tuTarea) res.json({msg:`Tarea no encontrada con id ${idtarea}`})

    //devuelve la tarea encontrada
    responseAPI.msg="Aquí tienes tu tarea"
    responseAPI.data=listaTareas

    //para quitar cualquier prop con delete
    delete responseAPI.cant;

    //devuelve la tarea encontrada
    res.json(responseAPI)
}

//UpdateTarea
export const updateTarea = (req, res, next)=>{
    const {idtarea} = req.params;

    //de aquí ccogemos los datos
    const datos = req.body

    //método para encontrar el índice de una tarea
    const index = listaTareas.findIndex(t => t.id == idtarea);

    // si index -1 devolver error!
    if(index == -1) {
        responseAPI.msg=`Tarea no encontrada ${idtarea}`;
        responseAPI.data=[];
        responseAPI.cant = null;
        responseAPI.status="error";
       
    }

    const tarea = listaTareas[index];

    //opción1: hacemos un PATCH de tarea
    listaTareas[index] = {
        ...tarea, 
        tarea: datos.tarea
    }

    //opción2: PUT (reemplaza el objeto completo)
    // listaTareas.splice(index, 1, {
    //     id: tarea.id,
    //     tarea: datos.tarea
    // })
     res.json(responseAPI)
  
}

//DeleteTarea
export const deleteTarea = (req, res, next)=>{
    const {idtarea} = req.params;

    //devolver todas las tareas, EXCEPTO la que tiene el id a borrar
    // const tareasActualizadas = listaTareas.filter( t => t.id != idtarea );
    // listaTareas = tareasActualizadas;

    //cuidado y verificar que si indice es -1 devolver ob
    //método para encontrar el índice de una tarea
    const index = listaTareas.findIndex(t => t.id == idtarea)

    const tareaBorrar=listaTareas[index];

    listaTareas.splice(index, 1);

    responseAPI.msg=`Tarea eliminada correctamente: ${idtarea}`;
    responseAPI.data=tareaBorrar;
    responseAPI.cant = null;
    responseAPI.status="ok";
    res.json(responseAPI)

}