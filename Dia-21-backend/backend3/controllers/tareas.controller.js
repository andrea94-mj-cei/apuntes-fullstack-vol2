//importamos lista tareas desde data.js
import listaTareas from '../db/data.js'; 


//Create
export const createTarea = (req, res)=>{
    const datos = req.body;
    const newId = Math.random();
    res.send("Irme a casa, id:"+newId)
}
//con método push crear una nueva tarea

//GetAllTareas
export const getAllTareas = (req, res)=>{
    //devuelvo las tareas de la db
    res.json(listaTareas)
}

//GetTarea
export const getTarea = (req, res)=>{
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
    res.send(`Tarea ${idtarea} eliminada`)
}