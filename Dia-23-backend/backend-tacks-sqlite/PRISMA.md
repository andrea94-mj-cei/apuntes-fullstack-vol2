# PRISMA / TypeORM / Sequelize

Es un OMR (Object Relational Mapping), nos permite trabajar con bases de datos de manera sencilla y eficiente. Prisma realiza una capa de abstraccion de la base de datos y nos permite trabajar en ella sin saber tanto SQL.

- Instalar PRISMA y configurar conexión a DB

```bash
npm i @prisma/client
npx prisma init
npx prisma migrate dev --name init
npx prisma generate
```

- Después de instalarlo en el archivo .env, te crea solo la variable de entorno para la DB, la eliminamos, ya que es un ejemplo para una base de datos que no queremos. Creamos la nueva variable para nuestra DB. ej:

*Link a nuestra DB de SQLite
DATABASE_URL="file:../db/base-datos.db"

<!-- DESCARGAR EXTENSIÓN PRISMA (nos pone colores en el archivo schema de prisma y nos completa código, etc...) -->

- Vamos al archivo de la carpeta que se ha creado de PRISMA (shema.prisma) y creamos la primera tabla de la BD. Ej:

model Tareas {
  id            Int @id @default(autoincrement())
  tarea         String
  isCompletada  Boolean @default(false)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

- A continuación escribimos en consola:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

- En el archivo donde vamos a usar los datos de la DB hay que importar:

```js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
```

- Para que nos cree un nuevo documento de base de datos con el schema que hemos creado

npx prisma db push

- Para que nos genere un prisma schema desde una bd

npx prisma db pull

