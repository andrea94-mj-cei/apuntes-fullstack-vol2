import { DB_USER, DB_PASS, DB_CLUSTER, DATABASE } from '../config/config.js';
import mongoose from 'mongoose';


export const conectarDB = async () =>{
    const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_CLUSTER}/${DATABASE}?retryWrites=true&w=majority&appName=CeiValencia`

    /*
    Query Params:
    - retryWrites: (true) Reintentar almacenar los datos nuevamente en caso de fallo.
    - w: (majority) asegurarnos que la operación se hizo correctamente en la mayoría de los servers.
    - appName: (CEI VALENCIA) identifica tu aplicación en los logs y métricas que posee MongoDB.
    */

    try{
      await mongoose.connect(url);
      console.log("Conectado a MongoDB Atlas");
      console.log("Base de datos actual:", mongoose.connection.db.databaseName);

      //preguntamos que colecciones tengo disponibles
      const collections = await mongoose.connection.db.listCollections().toArray();
      console.log("Colecciones disponibles;", collections.map( c => c.name ));
    }catch(e){
      console.error("Error al conectar con la base de datos");
    }
}

