import dotenv from 'dotenv';


dotenv.config();

export const PORT = process.env.PORT || 3000;
export const DOMAIN = process.env.DOMAIN || 'http://localhost';
export const FULL_DOMAIN = `${DOMAIN}:${PORT}`;
