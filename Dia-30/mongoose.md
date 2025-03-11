# Mongoose CRUD CheatSheet

## Métodos de Lectura

```js
//Encontrar todos los documentos
Modelo.find();

//Encontrar por ID
Modelo.findById(id);

//Encontrar uno que cumpla cierto criterio, nos va a devolver el primer elemento que encuentre que cumpla los dos valores
Modelo.findOne({ campo: valor,
                 campo2: valor2 });

//Buscar con filtros específicos
Modelo.find({ edad: { $gt: 18 } }); //mayor que 18 (gt es Greater Than)
```


## Métodos de Creación

```js
//Crear elemento
Modelo.create ({ campo: valor,
                 campo2: valor2 });

//Crear múltiples documentos a la vez
Modelo.insertMany([{
    campo:valor
},
{
    hobbies: ["ir a la playa", "jugar a las cartas"]
},
{
    campo3:valor3
}]);
```


## Métodos para Actualizar

```js
//Actualizar por ID y obtener el documento actualizado (siempre primero el ID y después el campo a actualizar)
//Si queremos que nos devuelva los datos que acabamos de actualizar: {new:true}
Modelo.findByIdAndUpdate(id, {campo:nuevoValor}, {new:true});

//Actualizar un documento que cumpla un criterio
Modelo.updateOne({ campo:valor }, { $set: {campo:nuevoValor} }) //($set para guardar datos)

//Actualizar Varios
Modelo.updateMany({ campo:valor }, { $set: { campo:nuevoValor }});
```


## Métodos para Eliminar

```js
//Eliminar por ID
Modelo.findByIdAndDelete(id);

//Elimiar uno que cumpla un criterio
Modelo.deleteOne({ campo:valor });

//Eliminar varios
Modelo.deleteMany({ campo:valor });
```


## Operadores comunes (de filtro, busqueda)

```js

- $eq: igual a
- $ne: no igual a
- $gt: mayor que
- $gte: mayor o igual que
- $lt: menor que
- $lte: menor o igual que
- $in: dentro del array
- $nin: no estén dentro del array
- $and: Y lógico
- $or: O lógico
```


## Operaciones útiles

```js

//Para actualizaciones
{ new: true }               //devuelve el documento actualizado
{ upsert: true }            //(Update + Insert) crea al elemento si no existe

//Para consultas
.select("campo1 campo2")    //Seleccionamos campos específicos
.limit(10)                  //Limitar los resultados a 10
.skip(5)                    //saltear los resultados
.sort({ campo: 1 })         //ordenar (1 ascendente, -1 descendente)                

```
