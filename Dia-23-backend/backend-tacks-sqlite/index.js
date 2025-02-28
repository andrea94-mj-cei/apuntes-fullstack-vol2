import express from 'express'
import router from './routes/index.routes.js'
import {PORT, DOMAIN, FULL_DOMAIN} from './config/config.js'


const app = express();

//Middlewares
app.use(express.json()); //Leer datos que vienen en el body de mi request


//Rutas del front
app.get('/', (req, res, next) => {
  res.send('Bienvenidos a nuestra API de ToDo list con Express + SQLite');
}
);

//Rutas de nuestra API
app.use('/api/v1/', router);


app.listen(PORT, (req, res, next) => {
  console.log(`Servidor corriendo en ${FULL_DOMAIN}`);
}
);
