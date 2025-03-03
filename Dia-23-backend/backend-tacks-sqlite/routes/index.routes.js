import { Router } from "express";
import{createTarea, getAllTareas, getTarea, updateTarea, deleteTarea} from "../controllers/tareas.controller.js";
const router = Router();

// ----- CRUD DE TAREAS -----

router.post("/tareas", createTarea)
router.get("/tareas", getAllTareas);
router.get("/tareas/:id", getTarea);
router.put("/tareas/:id", updateTarea);
router.delete("/tareas/:id", deleteTarea);



//marcar tarea como completada o no completada
// router.put("/tareas/:id/toggle", toggleCompleteTarea => {

// }
// );  

export default router;