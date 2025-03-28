import { Router } from "express";
import{createTarea, getAllTareas, getTarea, updateTarea, deleteTarea} from "../controllers/tareas.controller.js";
import { createUsuario, getAllTUsuarios, getUsuario, updateUsuario, deleteUsuario } from "../controllers/usuario.controller.js";

const router = Router();

// ----- CRUD DE TAREAS -----

router.post("/user/:uid/tareas", createTarea)
router.get("/user/:uid/tareas", getAllTareas);
router.get("/user/:uid/tareas/:id", getTarea);
router.put("/user/:uid/tareas/:id", updateTarea);
router.delete("/user/:uid/tareas/:id", deleteTarea);
//uid: id del usuario (userId)


// ----- CRUD USUARIOS -----

router.post("/usuario", createUsuario)
router.get("/usuario", getAllTUsuarios);
router.get("/usuario/:id", getUsuario);
router.put("/usuario/:id", updateUsuario);
router.delete("/usuario/:id", deleteUsuario);



//marcar tarea como completada o no completada
// router.put("/tareas/:id/toggle", toggleCompleteTarea => {

// }
// );  

export default router;