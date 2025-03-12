import mongoose from "mongoose";

const options = {
    collection: "compras",  //nombre de la colección en MongoDB
    strict: true,            //solo permite guardar los campos definidos en el sistema
    collation: {
      locale: "es",          //configuración para el idioma español
      strength: 1            //nivel de comparación de strings (1: ignorar mayúsculas, minúsculas y tildes)
    }
  }
  
  //esquema
  const compraSchema = new mongoose.Schema({
    fecha: {type: Date, default: Date.now},

    usuario: {type: mongoose.Schema.Types.ObjectId, ref: "Usuario"}, //usuario específico
    productos: [{type: mongoose.Schema.Types.ObjectId, ref: "Productos"}] //lista de productos comprados
  }, options);
   
  //modelo (esta variable se suele exportar para utulizarla en otros archivos)
  export const Compra = mongoose.model("Compra", compraSchema);