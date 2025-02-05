# HOOKS

- Son funciones que nos dan características especiales en los componentes de React. Se pueden considerar como "Super Poderes" en react.

## useState

- Nos permite tener variables inteligentes que se van a re-renderizar cada vez que las actualizamos.


## 10 ACTIVIDADES con useState
Ejercicios de useState en repo Component-party.

1. Contador Simple:
Crea un componente con un botón que incremente un contador. Muestra el valor del contador en la pantalla.

2. Interruptor On/Off:
Implementa un botón que alterne entre los estados "Encendido" y "Apagado". Aprovechar este cambio de estado para cambiar la clase de un objeto, o sus estilos.

3. Lista de Tareas Básica:
Crea un componente que permita añadir tareas a una lista y mostrarlas.

4. Formulario de Registro:
Desarrolla un formulario simple con campos para nombre y email. Usa useState para manejar los cambios en los inputs. Podemos mostrar los datos enviados con un alert. Es buena práctica validar los datos antes de enviarlos.

5. Galería de Imágenes:
Crea una galería simple donde el usuario pueda navegar entre varias imágenes usando botones de "anterior" y "siguiente". Puedes utilizar `https://dummyjson.com/docs/` para generar las imágenes.

6. Temporizador:
Implementa un temporizador con 2 botones: 
uno para iniciarse / pausarse
otro para reiniciarse.

7. Calculadora Básica:
Crea una calculadora que pueda realizar operaciones simples (suma, resta, multiplicación, división).

8. Juego de Adivinanza:
Desarrolla un juego donde el usuario intente adivinar un número aleatorio, con pistas de "más alto" o "más bajo".
```js
const randomNum = Math.floor(Math.random() * 100) +1;
```

9. Editor de Texto en Tiempo Real:
Crea un área de texto que muestre en tiempo real un recuento de palabras y caracteres mientras el usuario escribe.

10. Carrito de Compras:
Implementa un carrito de compras simple donde los usuarios puedan añadir items, ver el total y la cantidad de items. Investiga el método "reduce" para arrays para calcular el total.



