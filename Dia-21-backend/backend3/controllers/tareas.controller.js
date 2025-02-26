//importamos lista tareas desde data.js
import listaTareas from '../db/data.js'; 


//Create
export const createTarea = (req, res)=>{
    
    const datos = req.body;
    //crea un nuevo id entre el 0 y el 100
    const newId = Math.floor(Math.random()*100);
    const newTarea = {
        id: newId,
        tarea : datos.tarea
    }
    console.log("Nueva tarea es:,", newTarea);

    listaTareas.push(newTarea);

    res.send(newTarea);

    //(datos enviados en el request por el usuario en json, se leen con req.body) 
    //{
    //    "tarea": "Esta es una nueva tarea",
    //    "time": "Wed, 21 Oct 2015 18:27:50 GMT"
    //}

}


//GetAllTareas
export const getAllTareas = (req, res)=>{
    //devuelvo las tareas de la db
    res.json(listaTareas)
}

//GetTarea
export const getTarea = (req, res)=>{
    //"http://localhost:3000/api/v1/tareas/:idtarea"
    const {idtarea} = req.params; 

    //busco la tarea
    const tuTarea = listaTareas.find( t => idtarea == t.id );

    //si no encuentra tarea...
    if(!tuTarea) res.json({msg:"Tarea no encontrada"})

    //devuelve la tarea encontrada
    res.json(tuTarea);
}

//UpdateTarea
export const updateTarea = (req, res)=>{
    const {idtarea} = req.params;

    res.send(`Tarea ${idtarea} editada`)
}

//DeleteTarea
export const deleteTarea = (req, res)=>{
    const {idtarea} = req.params;

    //devolver todas las tareas, EXCEPTO la que tiene el id a borrar
    // const tareasActualizadas = listaTareas.filter( t => t.id != idtarea );
    // listaTareas = tareasActualizadas;

    //método para encontrar el índice de una tarea
    const index = listaTareas.findIndex(t => t.id == idtarea)
    listaTareas.splice(index, 1);

    res.send(`Tarea ${idtarea} eliminada`)
}