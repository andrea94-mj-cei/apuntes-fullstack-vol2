import { PrismaClient } from "@prisma/client";
import { parse } from "dotenv";

const prisma = new PrismaClient({ log: ['info', 'error'] });

const responseAPI = {
    msg:"",
    data:[],
    status: "ok",
    cant: null
};


export const createUsuario = async (req, res, next) =>{
    try{

        const{nombre, description, email} = req.body;
        const nuevoUsuario = await prisma.usuario.create({
            data:{
                nombre: nombre,
                description: description,
                email: email
            }
        });

        responseAPI.msg="Usuario creado con éxito";
        responseAPI.data=nuevoUsuario;
        responseAPI.status="ok",
        
        res.status(201).json(responseAPI);

    }catch(error){
        next(error);
    }

}
export const getAllTUsuarios = async (req, res, next) =>{
    try{

    const listaUsuarios = await prisma.usuario.findMany({
            include:{
                tareas:true
            }
        });   

    responseAPI.msg="Los usuarios han sido obtenidos con éxito";
    responseAPI.data=listaUsuarios;
    responseAPI.status="ok",
    responseAPI.cant=listaUsuarios.length;

    res.status(200).json(responseAPI);

    }catch(error){
        next(error);
    }
}
export const getUsuario = async (req, res, next) =>{
    try{

        const {id} = req.params;
        const usuario = await prisma.usuario.findUnique({
            where:{
                id: parseInt(id)
            },
            include:{
                tareas:true
            }
        });

        responseAPI.msg="Usuario obtenido con éxito";
        responseAPI.data=usuario;
        responseAPI.status="ok",
        responseAPI.cant=null;

        res.status(200).json(responseAPI);

    }catch(error){
        next(error);
    }
}
export const updateUsuario = async (req, res, next) =>{
    try{

        const {id} = req.params;
        const{nombre, description, email} = req.body;

        const usuarioActualizado = await prisma.usuario.update({
            where:{
                id: parseInt(id)
            },
            data:{
                nombre: nombre,
                description: description,
                email: email
            },
            include:{
                tareas:true
            }
        });

        responseAPI.msg="Usuario actualizado con éxito";
        responseAPI.data=usuarioActualizado;
        responseAPI.status="ok",
        
        res.status(200).json(responseAPI);

    }catch(error){
        next(error);
    }
}


export const deleteUsuario = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Verificar si el usuario existe
        const usuarioExiste = await prisma.usuario.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                tareas: true
            }
        });

        // Si no existe, avisar al usuario
        if (!usuarioExiste) {
            responseAPI.status = "error";
            responseAPI.msg = `El usuario con ID ${id} no existe`;
            return res.status(404).json(responseAPI);
        }

        // Eliminar el usuario
        const usuarioEliminado = await prisma.usuario.delete({
            where: {
                id: parseInt(id)
            }
        });

        responseAPI.msg = `El usuario con ID ${usuarioEliminado.id} ha sido eliminado con éxito`;
        responseAPI.data = usuarioEliminado;
        responseAPI.status = "ok";
        responseAPI.cant = null;

        res.status(200).json(responseAPI);

    } catch (error) {
        next(error);
    }
};