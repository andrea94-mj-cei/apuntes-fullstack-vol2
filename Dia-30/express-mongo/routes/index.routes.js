import {Router} from 'express';
import {getAllUsers, getUser, createUser, updateUsers, deleteUsers } from '../controllers/users.controllers.js';

const router = Router();


router.get("/users", getAllUsers);
router.get("/users/:idusuario", getUser);
router.post("/users", createUser);
router.put("/users/:idusuario", updateUsers);
router.delete("/users/:idusuario", deleteUsers);

export default router;