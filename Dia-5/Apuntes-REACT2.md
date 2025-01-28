# PROPS

Propiedades que podremos enviar de componentes padres a componentes hijos.

```jsx

export const TarjetaUsuario = (nombre, edad, ocupacion) => {


  return ( 
    <>
    <h2>Tarjeta Usuario</h2>
    <p>Mi nombre es: {nombre}</p>
    <p>Mi edad es: {edad}</p>
    <p>Mi ocupación es: {ocupacion}</p>
    </>
   );
}
```
### Cosas a tener en cuenta (props)
- Si enviamos un String usar comillas, no llaves.
- Si nuestra prop se llama igual a la variable que queremos enviar, podemos usar solo el nombre de la variable. Ejemplo: `edad={edad}` => `edad`
- Si no enviamos una prop se envia un undefined.
- Excepto para booleanos (que por defecto es TRUE), donde se debe usar llaves si o sí para definirlo. Ejemplo `isMayor={isMayor}`

- Spread Operator: podemos enviar todas las propiedades de un objeto como props, con el operador: `{...nombreObjeto}` (hace una copia de todas las propiedades para poder utilizarlas, después puedes utilizar las que quieras) // Junta todas las propiedades y hace una copia

- Interpolación: Podemos interpolar variables dentro de JSX. Esto es útil para mostrar información dinámica, listas y hacer condicionales. (Ejemplos en archivo TarjetaUsuario.jsx)


# ATAJOS PARA REACT

- Descargar extensión SIMPLE REACT SNIPPETS
- sfc (te crea la funcion para crearla por defecto)
```js
//Ejemplo
const App = () => {
  return ( 
    <></>
   );
} 
export default App;
```

- sfcn (te crea la función para exportarla común)
```js
//Ejemplo
export const TarjetaUsuario = () => {
  return ( 
    <>
    </>
   );
}
```

### Utilidades
- mirar tailwindcss
- shadcn (librería con componentes hechos con tailwind)
- styledcomponent (otra librería)