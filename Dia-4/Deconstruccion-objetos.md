# DECONSTRUCCION DE OBJETOS

- Es la creación de variables a partir de las propiedades de un objeto (apellido, edad, dirección...)

- Es indiferente el orden de las variables

- Podemos renombrar las variables utilizando: `nombreVariable : nombreVariableNuevo` (dos puntos)

- Podemos asignar un valor por defecto a una variable usando: `hobbie = "futbol"` (simbolo =)

```js

const nombre = "Ana";

const alumno ={
    nombre: "Andrea",
    apellido: "Miguel",
    edad: 30,
    direccion: {
        calle: "C/ La Rinconada",
        numero: 11
    }
}


//Ejemplos de orden, renombrar variable y asignar valor a variable

const { edad, nombre:nombreAlumno, apellido="Jarillo", direccion } = alumno;

console.log(nombre); // Andrea
```

# DECONSTRUCCION DE ARRAYS/LISTA

- Para deconstruir un vector, se usan corchetes en vez de llaves

- Es importante tener en cuanta la cantidad de items y su orden, ya que dependemos del indice del array

- Se puede asignar un valor por defecto `item3:"coca-cola"`



```js
const listaCompras = ["tomate", "lechuga", "papas"];
console.log(listaCompras[1]);

const [item1, item2, item3] = listaCompras; //deconstruccion
console.log(item2); //devuelve lechuga

const [item1, item3] = listaCompras; //deconstruccion
console.log(item2); //devuelve lechuga

const [item1, ,item3, item4="coca-cola"] = listaCompras; //deconstruccion
console.log(item2); //devuelve papas ya que hemos puesto un espacio entre medias y interpreta que hay un segundo item.
 

```

DESCARGAR EXTENSIÓN EN CASA: QUOKKA (para probar los resultados de las variables y demás sin que tengas que usar la consola)
