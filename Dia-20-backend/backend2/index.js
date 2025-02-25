import express from "express";
import {PORT, DOMAIN, FULLDOMAIN} from './config/config.js'

const app = express();

//GET (obtener)
app.get("/", (req, res)=>{
    res.send("Buenas!");
})

app.get("/usuario", (req, res)=>{
    res.send("Lista de usuarios");
})

//POST (crear un nuevo dato)
app.post("/usuario", (req, res) =>{
    res.send("Crear nuevo usuario");
})

//PUT (actualiza todo nuestro item por los valores que le envio)
app.put("/usuario", (req, res) =>{
    res.send("Actualizar usuario");
})

//PATCH (actualiza solo los valores que envío)
app.patch("/usuario", (req, res) =>{
    res.send("Actualizar usuario");
})

//DELETE
app.delete("/usuario/:id", (req, res) =>{
    //para que lea el id
    const id = req.params.id;

    res.send(`Eliminar usuario con id ${id}`);
})


//Ruta con GET para obtener nombre y edad
app.get("/usuario/:nombre/:edad", (req, res)=>{

    const {nombre, edad} = req.params
    
    res.send (`El nombre es ${nombre} y la edad es ${edad}`);
})


app.listen (PORT, ()=>{
    console.log(`Servidor funcionando en ${DOMAIN}:${PORT}`)
})