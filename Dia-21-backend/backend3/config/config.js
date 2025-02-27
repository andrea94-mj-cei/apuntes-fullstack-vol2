//en este archivo es donde se crean las variables de configuración de nuestra API, las exportamos para importarlas en index.js

import dotenv from 'dotenv'
dotenv.config();



export const PORT = process.env.PORT || 3000

export const DOMAIN = process.env.DOMAIN || "http://localhost"

export const FULLDOMAIN = `${DOMAIN}:${PORT}`;