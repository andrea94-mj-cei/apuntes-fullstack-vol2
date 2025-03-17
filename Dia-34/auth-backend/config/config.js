import dotenv from 'dotenv'
dotenv.config();


// Variables del servidor Express
export const PORT = process.env.PORT || 3000

export const DOMAIN = process.env.DOMAIN || "http://localhost"

export const FULLDOMAIN = `${DOMAIN}:${PORT}`

//Variables de BD
export const DB_USER = process.env.DB_USER || "andreamj94"

export const DB_PASS = process.env.DB_PASS || "Qs1bXY8wrv1vLktc"

export const DB_CLUSTER = process.env.DB_CLUSTER || "ceivalencia.tk43m.mongodb.net"

export const DATABASE = process.env.DATABASE || "sample_mflix"

//Variable para JWT

export const JWT_SECRET = process.env.JWT_SECRET || "my_super_pass"