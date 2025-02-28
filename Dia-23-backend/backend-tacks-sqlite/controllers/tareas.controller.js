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
                tarea: tarea
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

export const getAllTareas = async (req, res, next) =>{
    try{

    const listaTareas = await prisma.tareas.findMany();    
        
    responseAPI.msg="Las tareas han sido obtenidas con éxito";
    responseAPI.data=listaTareas;
    responseAPI.status="ok",
    responseAPI.cant=null;

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
    responseAPI.data=listaTareas;
    responseAPI.status="ok",
    responseAPI.cant=null;    

    }catch(error){
        next(error);
    }
};
export const updateTarea = async (req, res, next) =>{
    try{

    const tareaActualizada = await prisma.tareas.update({
        where:{
            id: parseInt(req.params.id)
        },
        data:{
            tarea: req.body.tarea
        }
    });

    }catch(error){
        next(error);
    }
};
export const deleteTarea = async (req, res, next) =>{};