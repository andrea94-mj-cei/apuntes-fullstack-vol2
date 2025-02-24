//importamos módulo de express
const express = require ("express");

//creamos instancia de express
const app = express();

//puerto donde se ejecutará nuestra API
const PORT = 3000;

//Rutas
app.get("/", (req, res)=>{
    
    console.log("Alguien quiere ver la web")

    //.send para mandarle información al usuario
    res.send("Bienvenido a mi web")
});
app.get("/user", (req, res)=>{
    res.send("Estás en usuarios")
});

app.listen (PORT, ()=>{
    console.log("Mi primer servidor en Nodeeeeeee!!!")
    console.log("Puedes verme en http://localhost:"+PORT)
})
