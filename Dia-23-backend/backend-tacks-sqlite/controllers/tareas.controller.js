import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
                tarea: tarea,

            }
        });
        
        

        responseAPI.msg="Tarea creada con éxito";
        responseAPI.data=nuevaTarea;
        responseAPI.status="ok",
        responseAPI.cant=null;

        res.status(200).json(responseAPI);

    }catch(error){
        next(error);
    }
}

export const getTareas = async (req, res, next) =>{
    try{
        //trabajar con la base de datos
        const listaTareas = await prisma.tareas.findMany();

        responseAPI.msg="Lista de tareas obtenidas con éxito";
        responseAPI.data=listaTareas;
        responseAPI.status="ok",
        responseAPI.cant=listaTareas.length;

        res.status(200).json(responseAPI);

    }catch(error){
        next(error);
    }
}

export const getAllTareas = async (req, res, next) =>{};
export const getTarea = async (req, res, next) =>{};
export const updateTarea = async (req, res, next) =>{};
export const deleteTarea = async (req, res, next) =>{};