import mongoose from "mongoose";

const options = {
    collection: "users",  //nombre de la colección en MongoDB
    strict: true,            //solo permite guardar los campos definidos en el sistema
    collation: {
      locale: "es",          //configuración para el idioma español
      strength: 1            //nivel de comparación de strings (1: ignorar mayúsculas, minúsculas y tildes)
    }
  }
  
  //esquema
  const usuarioSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    hobbies: Array,
    email: String,
    isAdmin: Boolean,
  }, options);
   
  //modelo (esta variable se suele exportar para utulizarla en otros archivos)
  export const Usuario = mongoose.model("Usuario", usuarioSchema);