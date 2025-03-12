import mongoose from "mongoose";

const options = {
    collection: "productos",  //nombre de la colección en MongoDB
    strict: true,            //solo permite guardar los campos definidos en el sistema
    collation: {
      locale: "es",          //configuración para el idioma español
      strength: 1            //nivel de comparación de strings (1: ignorar mayúsculas, minúsculas y tildes)
    }
  }
  
  //esquema
  const productoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    compras: [{ type: mongoose.Schema.Types.ObjectId, ref: "Compra" }] //todas las compras que tiene ese producto
  }, options);
   
  //modelo (esta variable se suele exportar para utulizarla en otros archivos)
  export const Producto = mongoose.model("Producto", productoSchema);