# variables de entorno

- creamos archivo: .env en el directorio y ponemos las siguientes variables:

PORT = 3000
DOMAIN = http://localhost

- instalamos librería (nom i dotenv)

- lo importamos en config.js // el archivo quedaría así:

```js
import dotenv from 'dotenv'
dotenv.config();

export const PORT = process.env.PORT || 3000

export const DOMAIN = process.env.DOMAIN || "http://localhost"

export const FULLDOMAIN = `${DOMAIN}:${PORT}`;
```

- Incluir en gitignore el archivo .env

- crear archivo .env.example (este archivo es para que la persona que se descargue tu proyecto, pueda ver las variables de entorno), este no se incluye en gitignore

