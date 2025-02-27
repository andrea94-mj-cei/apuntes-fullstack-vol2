//En este archivo es donde creamos las rutas, las exportamos y las importamos en el archivo index.js
//archivo para configurar rutas

import {Router} from 'express';

//impoortamos todas las tareas
import { createTarea, getAllTareas, getTarea, updateTarea, deleteTarea } from '../controllers/tareas.controller.js';



//guardamos todas las rutas en router: se accede a todas desde "/api/v1/"
const router = Router();

// ---- CRUD TAREAS ----

router.post("/tareas", createTarea );//Create
router.get("/tareas", getAllTareas)//Get all
router.get("/tareas/:idtarea", getTarea);//Get 1
router.put("/tareas/:idtarea", updateTarea)//Update
router.delete("/tareas/:idtarea", deleteTarea)//Delete




export default router;
