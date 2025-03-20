import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config.js';

import { Usuario } from "../models/index.js";

const responseAPI = {
  data: [],
  msg: "",
  status: "ok"
}

export const registerUser = async (req, res, next) =>{
  try{
    //traer datos del body
    const {email, password, name} = req.body;

    //verificar si el usuario existe
    const existingUser = await Usuario.findOne({email});
    if(existingUser){
      return res.status(400).json({
        mensaje: "El usuario con ese email ya existe, si eres tú intenta hacer un login"
      });
    }

    //crear el nuevo usuario
    const user = new Usuario({
      email, password, name
    });
    await user.save();

    //generar nuevo Token JWT
    const token = jwt.sign(
      {
        userId: user._id,
        name: user.name
      },
        JWT_SECRET,
      {
        expiresIn: '2h'
      });


      const response= {
        mensaje: "Usuario registrado correctamente",
        token,
        //user: user //esto NO se hace, para no enviar datos sensibles (como la contraseña) en el frontend.
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      };
      
    //devolver datos del usuario + JWT Token
      res.status(201).json({"ok": true, response});
    
   
  }catch(e){
    next(e);
  }
}


export const loginUser = async (req, res, next) =>{
  try{
    //recibir datos del request
    const {email, password} = req.body;

    //verificamos si existe el usuario
    const user = await Usuario.findOne({email});

    //termino la petición si el usuario no existe
    if(!user){
      return res.status(404).json({mensaje: "Credenciales incorrectas"});
    }
    //comparo la clave del request con la clave de la DB
    if(password != user.password){
      return res.status(401).json({mensaje: "Credenciales incorrectas"});
    }
    

    //si existe: mensaje OK, devolver usuario (sin contraseña)
    const token = jwt.sign(
      {
        userId: user._id,
        name: user.name
      },
      JWT_SECRET,
      {
        expiresIn: '2h'
      }
    );

    //generar token y enviarlo
    res.status(200).json({
      mensaje: "Usuario logueado correctamente",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
    
 
    res.json({"mensaje": "login correcto!"})
  }catch(e){
    next(e);
  }
}


export const getCurrentUser = async (req, res, next) =>{

    //leer el Token
    //extraer el id


  try{
    //obtener id del TOKEN
    const idUsuario = req.userId;

    const user = await Usuario.findById(idUsuario).select('-password');
    if(!user){
      return res.status(404).json({mensaje: "Usuario no encontrado"});
    }

    const responseApi = {
      mensaje:"Usuario encontrado",
      data: user,
      status: "ok"
    }

    res.status(200).json(responseApi);
    
  }catch(e){
    next(e)
  }
}