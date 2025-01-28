# REACT

Es una librería JS para construir interfaces (creada por Facebook)

VENTAJAS:

- Nos permite crear etiquetas HTML personalizadas (componentes o módulos) y es altamente reutilizable

- Nos permite manejar el estado de nuestra APP (useState) y actualiza automáticamente nuestro DOM (utilizando el Virtual DOM)

- Uso de .jsx con interpolación clara (similar a template strings)

- Props: Enviar información a los componentes con atributos o children.

<MiTarjetaDePerfil nombre="Andrea" edad=20 >  <MiTarjetaDePerfil>


## INSTRUCCIONES PARA INICIAR PROYECTO DE REACT

```bash
npm create vite@latest
# elegimos el nombre del proyecto, carpetas, etc...
# elegimos REACT como librería de trabajo
cd nombre-proyecto
npm i
npm run dev
```

- En la carpeta public es donde va el contenido estático que va a tener nuestra web (imágenes, etc...)