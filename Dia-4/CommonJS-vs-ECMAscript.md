## CommonJS VS ES6 (ECMA Script Modules)

Node por defecto utiliza CommonJS, pero tambien soporta el mas moderno ES6

ES6 se utiliza tanto en el frontend (navegador), como en el backend-

- CommonJS es `síncrono` y ES6 Modules es `asíncrono` (el programa puede continuar mientras los módulos se cargan)

- ES6 es soportado en navegadores modernos, y en backend lo soporta Node, en Bun ya viene nativo.

- CommonJS exporta con `module.exports`y ES6 export con `export`

- CommonJS importa con `require`y ES6 importa con `import`

- Para utilizar ES6 en Node, podemos crear archivos `.mjs`, pero es mejor incluir en el package.json :

```bash
"type": "module",
```

- En navegadores podemos usar ES6 con la etiqueta `<script type="module" src="./indes.js"></script>
