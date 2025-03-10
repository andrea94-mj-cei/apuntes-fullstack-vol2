# Guía Rápida Prisma + Express (Parte 2)


## Relaciones muchos a muchos

Se da cuando un registro de una tabla puede tener muchos registros relacionados en otra tabla y viceversa. 

Ejemplos: 
- Usuarios - Roles
- Categorías - Productos
- Estudiantes - Cursos


```prisma
model Usuario {
  id    Int     @id @default(autoincrement())
  nombre String
  email  String  @unique
  roles Rol[] @relation("Roles")
}

model Rol {
  id      Int      @id @default(autoincrement())
  nombre  String
  usuarios Usuario[] @relation("Roles")
}
```

```javascript
const usuarioConRoles = await prisma.usuario.findUnique({
  where: { id: 1 },
  include: { roles: true}
});
```

## Conectar 2 registros

Para conectar dos registros en una relación muchos a muchos, se puede usar el método `connect`.

```javascript

// Al momento de crear
const usuario = await prisma.usuario.create({
  data: {
    nombre: 'Juan',
    rol: {
      connect: { id: 1 }
    }
}});

// Si ya existen ambos
const usuario = await prisma.usuario.update({
  where: { id: 1 },
  data: {
    rol: {
      connect: { id: 2 }, // Conecta el rol con id 2 al usuario con id 1
    },
  },
});
```


- connect: Se utiliza para establecer relaciones entre registros existentes.
- findUnique: Se utiliza para encontrar un registro único basado en un campo único (mejor rendimiento)
- findFirst: Se utiliza para encontrar el primer registro que cumple uno o VARIOS criterios de búsqueda.
- findMany: Se utiliza para encontrar múltiples registros que cumplen con los criterios de búsqueda.

## Búsqueda Complejas

Con prisma podemos aplicar filtros tanto en usuarios como tareas simultanemaneamente.

Realizar en 2 pasos:

```javascript
// Primero solo traemos tareas activas y sus usuarios
const tareasActivas = await prisma.tarea.findMany({
  where: { isActiva: true },
  include: { usuario: true }, // Incluir información del usuario
});
// luego filtramos por usuarios Online
const tareasActivasOnline = tareasActivas.filter(tarea => tarea.usuario.isOnline);
```

Realizar en 1 único paso (búsqueda combinada):

```javascript
// Utilizando AND/OR
const tareas = await prisma.tarea.findMany({
  where: {
    AND: [
      { isActiva: true },
      { usuario: { isOnline: true } },
    ],
  },
  include: { usuario: true },
});

// Utilizando Anidación
const tareasConUsuariosEnLinea = await prisma.tarea.findMany({
  where: {
    isActiva: true,
    usuario: {
      isOnline: true,
    },
  },
  include: { usuario: true },
});
```


## Usar listas en la consulta

```javascript
const usuarios = await prisma.usuario.findMany({
  where: {
    id: {
      in: [25, 3, 9], // usuarios con id 25, 3 o 9
    },
  },
});

// Que cunpla IDs y status
const usuarios = await prisma.usuario.findMany({
  where: {
    AND: [
      {
        id: {
          in: [25, 3, 9],
        },
      },
      {
        status: {
          in: ["suspended", "removed"],
        },
      },
    ],
  },
});
```


### Paginación

Prisma permite paginar los resultados de las consultas.

```javascript
// 3er página
const tareasPaginadas = await prisma.tarea.findMany({
  skip: 10, // Saltar los primeros 10 resultados
  take: 5,  // Tomar los siguientes 5 resultados
});
```


### Transacciones

Prisma permite ejecutar múltiples operaciones dentro de una transacción para asegurar la consistencia de los datos.

```javascript
const [usuario, tarea] = await prisma.$transaction([
  prisma.usuario.create({
    data: { nombre: 'Juan', email: 'juan@example.com' },
  }),
  prisma.tarea.create({
    data: { titulo: 'Tarea de ejemplo', usuarioId: 1 },
  }),
]);
```

### Seeding

Prisma permite insertar datos de prueba en la base de datos. Creamos un archivo `seed.js` dentro de la carpeta prisma, y luego un script en nuestro `package.json` para ejecutarlo.

```json
{
  "scripts": {
    "seed": "node prisma/seed.js"
  }
}
```


```js
// seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function main() {
  await prisma.usuario.create({
    data: { nombre: 'Admin', email: 'admin@example.com' },
  });

  await prisma.tarea.createMany({
    data: [
      { titulo: 'Tarea de ejemplo 1', usuarioId: 1 },
      { titulo: 'Tarea de ejemplo 2', usuarioId: 1 },
      { titulo: 'Tarea de ejemplo 3', usuarioId: 1 },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

### Consulta RAW

Prisma permite ejecutar consultas SQL directamente.

```javascript
const result = await prisma.$queryRaw`SELECT * FROM Usuario WHERE nombre = ${'Juan'}`;
```

### Logging

Prisma permite habilitar el logging para ver las consultas SQL que se ejecutan.

```javascript
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});
