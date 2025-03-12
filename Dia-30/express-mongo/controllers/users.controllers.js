import { Usuario, Compra, Producto } from "../models/index.js";

const responseAPI = {
  data: [],
  msg: "",
  status: "ok",
  cant: null
}

export const getAllUsers = async (req, res, next) =>{
    try{
        const users = await Usuario.find();

        responseAPI.data=users;

        res.status(200).json(users);

      }catch(e){
        console.error("tuvimos un error")
        next(e);
      }
}


export const getUser = async (req, res, next) =>{
  try{
    const {idusuario} = req.params; 

    const users = await Usuario.findById();

    responseAPI.data=users;

    res.status(200).json(users);

  }catch(e){
    console.error("tuvimos un error")
    next(e);
  }
}


export const createUser = (req, res, next) =>{

}


export const updateUsers = (req, res, next) =>{

}


export const deleteUsers = (req, res, next) =>{

}