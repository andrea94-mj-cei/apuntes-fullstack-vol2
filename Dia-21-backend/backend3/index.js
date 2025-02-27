import express from 'express'; //importamos express
import {PORT, DOMAIN, FULLDOMAIN} from "./config/config.js"; //importamos variables de configuración
import router from './routes/index.routes.js'; //importamos las rutas

//importamos middlewares
import Auth from './middlewares/auth.js';
import {Saludar, Despedir} from './middlewares/saludar.js';
import { errorHandler, notFoundHandler } from './middlewares/errors.js';



const app = express(); //declaramos express


//Middlewares (compartidos para toda mi app)
app.use(Despedir);
app.use(express.json()); //leer/parse el posible body como JSON

//Rutas de nuestro Front
app.get("/", Saludar, (req, res, next) =>{
    res.send("Bienvenidos a nuestro RestAPI de tareas")
})

//Rutas de nuestra api
app.use("/api/v1/", router);

//handle de errores 404 para rutas inexistentes con GET
// app.get("*", (req, res, next) =>{
//     res.json({
//         status: "error",
//         code: 404, 
//         msg: "Página no encontrada"
//     })
// });

app.get("/test-error", (req, res, next) =>{
    try{
        const num = 2;
        num = 3;
    }catch{
        next();
    }
})

app.use(notFoundHandler);
app.use(errorHandler);

app.listen (PORT, ()=>{
    console.log(`Servidor funcionando en ${FULLDOMAIN}`)
})

