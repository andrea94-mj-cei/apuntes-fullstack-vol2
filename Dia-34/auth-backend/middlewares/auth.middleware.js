import jwt from 'jsonwebtoken';
import{JWT_SECRET} from '../config/config.js'; 

export const authMiddleware = (req, res, next) =>{

    // "Authorization: Bearer miTokenJWT-uhjkkkki"

    //  OPCIÓN 1
    // const authHeader = req.headers['authorization']
    // const lista = authHeader.split(' ');
    // lista[0];// Bearer
    // lista[1];// miTokenJWT-uhjkkkki
    // const token = lista[1]

        //  OPCIÓN 2
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log("Token : ", token);
    if(!token) {
        return res.status(401).json({mensaje: "Acceso denegado, Token requerido"});
    }

    try{
        //verificar el Token
        const decoded = jwt.verify(token, JWT_SECRET)
        req.userId = decoded.userId;
        next();

    }catch(e){
        res.status(401).json({mensaje: "Acceso denegado, Token inválido o incorrecto"})
    }

};