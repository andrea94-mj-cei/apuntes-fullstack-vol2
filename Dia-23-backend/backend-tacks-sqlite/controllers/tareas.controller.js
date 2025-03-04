import { PrismaClient } from "@prisma/client";
import { parse } from "dotenv";

//agregar a la terminal los logs de:
//query:muestra la consulta SQL final
//info: especifica las acciones que está realizando
//error: muestra los errores que se producen 
const prisma = new PrismaClient({ log: ['info', 'error'] });

const responseAPI = {
    msg:"",
    data:[],
    status: "ok",
    cant: null
};

export const createTarea = async (req, res, next) =>{
    try{

        const{tarea, usuarioId} = req.body;
        const nuevaTarea = await prisma.tareas.create({
            data:{
                // tarea: req.body.tarea,
                tarea: tarea,
                usuarioId: parseInt(usuarioId)
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

        const {uid} = req.params;
    //const listaTareas = await prisma.tareas.findMany();   
    
    //traer tareas con su usuario:
    const listaTareas = await prisma.tareas.findMany({
        where:{
            usuarioId: parseInt(uid)
        },
        include:{
            usuario:true
        }
    });

    //traer usuarios con sus tareas
    // const listaTareas = await prisma.usuario.findMany({
    //     include:{
    //         tareas:true
    //     }
    // }); 
        
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
            },
            include:{
                usuario:true    
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

        //ver si la tarea existe:
        const tareaExiste = await prisma.tareas.findUnique({
            where:{
                id: parseInt(id)
            }
        });

        //si no existe, avisar al usuario:
        if(!tareaExiste){
            responseAPI.status = "error";
            responseAPI.msg=`La tarea con ${id} no existe`;
            return responseAPI.status(404).json(responseAPI);
        }

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