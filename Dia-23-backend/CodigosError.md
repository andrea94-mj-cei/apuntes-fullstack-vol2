# GESTIONAR ERRORES

- Crear response con status() y JSON mejorado.

```js
const responseAPI= {
    data: [],
    msg: "",
    status: "ok"
}

res.status().json(responseAPI)
```

RANGO CÓDIGOS DE ERROR:

- 200 a 300 => petición exitosa
- 400 a 499 => Error en la peticion del cliente
- 500 a 599 => Error en nuestro servidor



LOS MÁS COMUNES

- 200  OK                       EXITOSO
- 201  CREATED                  RESOURCE CREATED
- 400  BAD REQUEST              PETICIÓN INVALIDA POR EL CLIENTE (ej: al crear una tarea, se olvida de mandar el parametro "tarea")
- 401  UNAUTHORIZED             NO ESTÁ AUTORIZADO (falta el token o el token es inválido)
- 403  FORBIDDEN                PROHIBIDO (acceso denegado a la solicitud)
- 404  NOT FOUND                NO ENCONTRADO (recurso no disponible)
- 500  INTERNAL SERVER ERROR    ERROR INTERNO (fallo inesperado en el servidor)