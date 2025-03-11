import express from 'express';
import router from "./routes/index.routes.js"
import cors from 'cors';

import {PORT, DOMAIN} from "./config/config.js";
import {conectarDB} from "./db/mongoose.js"


const app = express();
console.clear();


//Conexion a MongoDB



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

conectarDB();



//Rutas del front
app.get('/', (req, res, next) => {
  res.send('Bienvenidos a nuestra API de ToDo list con Express + SQLite');
}
);


app.use("/api/v1", router);

app.listen(PORT, (req, res, next) => {
    console.log(`Servidor corriendo en ${DOMAIN}:${PORT}`);
  })
  