import { PrismaClient } from "@prisma/client";
import { parse } from "dotenv";

//agregar a la terminal los logs de:
//query:muestra la consulta SQL final
//info: especifica las acciones que está realizando
//error: muestra los errores que se producen 
const prisma = new PrismaClient({ log: ['query', 'info'] });

const responseAPI = {
    msg:"",
    data:[],
    status: "ok",
    cant: null
};

export const createTarea = async (req, res, next) =>{
    try{

        const{tarea} = req.body;
        const nuevaTarea = await prisma.tareas.create({
            data:{
                // tarea: req.body.tarea,
                tarea: tarea
            },
            include:{
                usuario:true
            }
        });

        responseAPI.msg="Tarea creada con éxito";
        responseAPI.data=nuevaTarea;
        responseAPI.status="ok",
        responseAPI.cant=null;
        
        //201 para crear
        res.status(201).json(responseAPI);

    }catch(error){
        next(error);
    }
}

export const getAllTareas = async (req, res, next) =>{
    try{

    const listaTareas = await prisma.tareas.findMany();    
        
    responseAPI.msg="Las tareas han sido obtenidas con éxito";
    responseAPI.data=listaTareas;
    responseAPI.status="ok",
    responseAPI.cant=listaTareas.length;

    res.status(200).json(responseAPI);

    }catch(error){
        next(error);
    }
};

export const getTarea = async (req, res, next) =>{
    try{

    const {id} = req.params;

    const tarea = await prisma.tareas.findUnique({
        where:{
            id: parseInt(id) // convierte el string a número
        }});

    responseAPI.msg=`La tarea con ${id} ha sido obtenida con éxito`;
    responseAPI.data=tarea;
    responseAPI.status="ok",
    responseAPI.cant=null;    

    }catch(error){
        next(error);
    }
};

export const updateTarea = async (req, res, next) => {
    try {
        const { id } = req.params;

        const {isCompletada, tarea} = req.body;

        const tareaActualizada = await prisma.tareas.update({
            where: {
                id: parseInt(id) 
            },
            data : {
                tarea: tarea,
                isCompletada: isCompletada
            }
        });

        responseAPI.msg = `La tarea con ${id} ha sido actualizada con éxito`;
        responseAPI.data = tareaActualizada;
        responseAPI.status = "ok";

        res.status(200).json(responseAPI);

    } catch (error) {
        next(error);
    }
};

export const deleteTarea = async (req, res, next) =>{
    try{
        const {id} = req.params;

        

        const tareaEliminada = await prisma.tareas.delete({
            where:{
                id: parseInt(id)
            }
        });

        responseAPI.msg=`La tarea con ${tareaEliminada.tarea} ha sido eliminada con éxito`;
        responseAPI.data=tareaEliminada;
        responseAPI.status="ok",

        res.status(200).json(responseAPI);

    }catch(error){
        next(error);    
    }
};