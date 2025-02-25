# EXPRESS

## Ventajas

- Es rápido y minimalista
- Fácil de aprender
- Gran comunidad con muchos recursos
- Altamente extensible con middleweares

SETUP del proyecto 

1º
```bash
npm init
npm i express 
npm i nodemon -D

```

2º 
- Creamos archivo index.js

3º
- En packaje.json incorporamos dos nuevos scripts, y type:module

```json
{
  "name": "backend2",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js",
    "start": "node index.js"
  },
}
```

4º
- Creamos las variables en index.js

```js
//importamos módulo de express
import express from "express";

//creamos instancia de express
const app = express();

app.listen (PORT, ()=>{})
```

5º
- Creamos carpeta config y dentro archivo config.js (archivo donde tenemos toda la información de configuración de nuestro proyecto)

```js
export const PORT = 3000;

export const DOMAIN = "http://localhost";

export const FULLDOMAIN = `${DOMAIN}:${PORT}`
```

- Las importamos en index.js

```js
import {PORT, DOMAIN, FULLDOMAIN} from './config/config.js'
```

## MÉTODOS HTTP request:

- GET: obtener registros
- POST: crear un nuevo registro
- PUT: reemplazar un registro con los valores que le envío
- PATCH: actualizar un registro con los valores que le envío
- DELETE: eliminar información

ACLARACIÓN:
- Se suele usar PUT como si fuera un patch. Y patch no se usa.