# HOOKS

## useEffect

- Es un hook en REACT que te permite realizar operaciones secundarias en tus componentes. Por ejemplo, podemos ejecutar código después de que el componente se renderice.

### ¿Para qué se usa?

1. Realizar peticiones a API's
2. Manipular el DOM directamente
3. Configurar suscripciones o temporizadores

### Sintaxis básica

```js

import {useEffect} from 'React'

const MiComp = ()=>{

    useEffect(()=>{
        //código que se ejecutará después de renderizar

        //opcional: función de limpieza
        return () =>{
            //código que se ejecuta al desmontar el componente
        }
    }, [ /* Array de dependencias */ ])

}
```

### Ciclo de vida de los componentes

useEffect nos permite replicar el comportamiento de métodos que poseen los componentes con clases

- **componentDidMount**: Se ejecuta el código una vezm después de renderizar
- **componentDidUpdate**: Se ejecuta cada vez que actualizabamos el componente
- **componentWillUnmount**: Se ejecuta justo antes de que el componente se desmonte y se elimine del DOM.

Ejemplo Práctico:

```jsx
import {useState, useEffect} from 'react'

export const Temporizador = () =>{

    const [segundos, setSegundos] = useState(0);

    useEffect (()=>{

        //código que ejecutamos después de renderizar el componente
        const idInterval = setInterval(()=>{
            setSegundos( s => s+1 )
        }, 1000);

        //función de limpieza:
        return () =>{
            clearInterval(idInterval);
        }

    },[]);

    return(
        <>
        <h2>Temporizador</h2>
        <p>Han pasado {segundos} segundos</p>
        </>
    )
}

```

### Puntos claves a recordar

- useEffect se ejecuta después de cada renderizado por defecto. Recordar incluir el segundo parámetro. []

- El array de dependencias controla cuándo se vuelve a ejecutar el efecto.

- La función de limpieza es crucial para prevenir memory leaks y comportamientos inesperados.


## ACTIVIDADES con useEffect (en Component-Party)

1. Crea un componente que muestre un mensaje en la consola cuando el componente se monte por primera vez.

2. Crea un componente que registre el tiempo en segundos desde que el componente se montó.

3. Crea un componente que obtenga datos de una API y los muestre en pantalla.(https://jsonplaceholder.typicode.com/posts/1)

4. Crea un contador con botones para incrementar y decrementar el valor. Usa useEffect para registrar cada vez que el valor del contador cambie.

5. Crea un componente que registre el tamaño de la ventana en la consola cada vez que esta cambie.

6. Crea un componente que sincronice un estado con el localStorage del navegador.

7. Crear un componente que muestre en consola cada vez que se monta/desomnta el componente.
