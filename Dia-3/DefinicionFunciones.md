# Definición de funciones

```js
//FUNCIÓN CLÁSICA
function miFuncion(parametro1, parametro2="item2"){
    //defaultValue for param2 = item2
    return "valor";
}
miFuncion("item1", "item2-b"); //argumento

//FUNCIÓN ASIGNADA A UNA VARIABLE
const miFuncion = function (param1){
    return "valor";
}
miFuncion("item1");

//FUNCIÓN FLECHA
const miFuncion = (param1) =>{
    return "valor";
}
miFuncion("item1");

//FUNCIÓN FLECHA SIMPLIFICADA
const miFuncion = param1 => "valor";
//Solo se puede usar cuando la función es de una sola línea y devuelvo un dato

//FUNCIÓN CALLBACK
function suma(num1 , num2){
    return num1 + num2;
}
miFuncion(suma);

miBoton.addEventListener("click", function(){
    //haz la función xq primero haces click
})
```


## Actividad para el fin de semana
- Crear en una carpeta "test-math" un archivo "lib/math.js" con las funciones de sumar, restar, multiplicar, dividir.
- crear un archivo index.js que importe las funciones de math.js y muestre los resultados en consola.

```js
// index.js
console.log(sumar(5,3));
console.log(multiplicar(3,2));
```

- versión avanzada, que la consola me pida los datos:
"sumar 3 5"
"restar 2 1"