import express from 'express'; //importamos express
import {PORT, DOMAIN, FULLDOMAIN} from "./config/config.js"; //importamos variables de configuración
import router from './routes/index.routes.js'; //importamos las rutas

//importamos middlewares
import Auth from './middlewares/auth.js';
import {Saludar, Despedir} from './middlewares/saludar.js';



const app = express(); //declaramos express


//Middlewares (compartidos para toda mi app)
app.use(Despedir);
app.use(express.json()); //leer/parse el posible body como JSON

//Rutas (llamamos a Middlewares específicos)
app.get("/", Auth, Saludar, (req, res, next) =>{
    res.send("Bienvenidos a nuestro RestAPI de tareas")
})

//Rutas
app.use("/api/v1/", router);



app.listen (PORT, ()=>{
    console.log(`Servidor funcionando en ${FULLDOMAIN}`)
})

