import express from 'express';
import mongoose from 'mongoose';



const app = express();

//Config.js
const PORT = 3000;
const DOMAIN = "http://localhost";

//Conexion a MongoDB
const conectarDB = async () =>{
    const url = "mongodb+srv://andreamj94:Qs1bXY8wrv1vLktc@ceivalencia.tk43m.mongodb.net/?retryWrites=true&w=majority&appName=CeiValencia"
    await mongoose.connect(url)
    .then(()=> console.log('Conectado a la base de datos'))
    .catch((err)=> console.log("Error de conexion", e));
}

conectarDB();



//Rutas del front
app.get('/', (req, res, next) => {
  res.send('Bienvenidos a nuestra API de ToDo list con Express + SQLite');
}
);

app.listen(PORT, (req, res, next) => {
    console.log(`Servidor corriendo en ${DOMAIN}:${PORT}`);
  }
  );
  