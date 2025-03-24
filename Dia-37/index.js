import express from "express"
import Router from "express"

//importamos middleware con multer (para subir imágenes)
import { uploadImg } from "./middlewares/upload.middleware.js";

//---CONFIG.JS----
import dotenv from "dotenv"
dotenv.config(); //inicializar lectura de variables
const PORT = process.env.PORT || 3000;
const NOMBRE = process.env.NOMBRE || "Mundo"
//----------------

// Multer
const BACKEND_URL= process.env.BACKEND_URL || "http://localhost:3000"

const app = express();

//---MIDDLEWARES----
app.use(express.json()); //Procesa el JSON BODY para leer con req.body()
app.use(express.urlencoded({extended: false})); //Leer datos de urlEnconded con req.body();
//------------------

//Contenido estático(imagen)
//app.use("origen", express.statics("/destino"))
app.use("/uploads", express.static("public/uploads"));
app.use("/web", express.static("public"))


app.get("/", (req, res, next)=>{
    res.setHeader("ContentType", "text/html") //setheader, te dice que la respuesta se va a dar en HTML

    const landingHtml = `
    <p>Bienvenidos a nuestro backend en Express<p>
    <h1>Hola ${NOMBRE}<h1>

    <hr>
    <h2>Upload de archivos<h2>
    <form action="/api/v1/producto/upload" method="POST" enctype="multipart/form-data"> 
        <input type="file" name="imgprod">
        <button type="submit">Subir Imágen</button>
    <form>
    `;
    res.send(landingHtml)

})

//---ROUTES/INDEX.ROUTES.JS----
//import Router from "express"
const router = Router();
router.get("/", (req, res, next)=>{
    res.json({message: "Bienvenidos a nuestra API v1"})
})

router.get("/users", (req, res, next)=>{

    res.json({message: "Ruta de users"})
})

//ruta para subir imágenes de producto
//usamos el middleware de multer para procesar "imgprod" (en carpeta middlwares)
router.post("/producto/upload", uploadImg.single("imgprod"), (req, res, next)=>{

    //recibir imagen
    if(!req.file){
        return res.status(400).json({
            sucess: false,
            message: "No se ha proporcionado una imágen"
        })
    }
    console.log(req.file);

    //guardar "req.file.filename" en la base de datos
    const imageUrl = `${BACKEND_URL}/uploads/${req.file.filename}`;


    //responder al usuario

    try{
        return res.status(200).json({
            sucess: "ok",
            message: "Imagen subida con éxito",
            // fileData: req.file,
            data: {
                imageUrl: imageUrl,
                filename: req.file.filename,
                originalName: req.file.originalname,
                size: "523kb"
            }
        })
    }catch(e){
        next(e);
    }
});


app.use("/api/v1", router);

//-----------------------------

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en ${BACKEND_URL}`)
})