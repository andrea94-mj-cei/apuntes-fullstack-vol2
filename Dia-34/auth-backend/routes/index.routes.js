import {Router} from 'express';

import {registerUser ,loginUser, getCurrentUser } from '../controllers/auth.controller.js';

import {authMiddleware} from '../middlewares/auth.middleware.js'

const router = Router();

//Rutas de Auth
//auth.controller.js
router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);

//prueba para traer datos usando el token
router.get("/auth/me", authMiddleware ,getCurrentUser);

router.get("/protected", authMiddleware, (req, res)=>{
    res.json({message: "Estas en una ruta protegida, FELICIDADES tu Token es válido"})
})


//Rutas posibles de User (para admins)
//usuario.controller.js
// router.get("/usuario", getAllUsuarios);
// router.get("/usuario/:id", getUsuarioById);
// router.delete("/usuario/:id", deleteUsuario);

export default router;