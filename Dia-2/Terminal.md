# TERMINAL

¿Qué podemos hacer con la terminal?
- usar el sistema de gestión de paquetes NPM
- trabajar con testings, frameworks y bundling (bundling: juntar diferente código más extenso en un solo código más compacto)
- gestionar aplicaciones mediante el CLI (Command Line Interface)
- uso de GIT (ej: push, pull, commit, etc...)

DIFERENTES COMANDOS:

### Para movernos entre carpetas
- ls : para que nos muestre las carpetas y archivos que hay dentro del directorio/carpeta
- cd : para entrar en carpeta (cd+nombreCarpeta)
- cd.. : para ir una carpeta atrás
- cd/ : te lleva al directorio principal
- clear : limpiar terminal
- ctrl+c : cortar el proceso de la terminal

### Para crear carpetas
- mkdir : crear carpeta (mkdir+nombreCarpeta)
- rmdir : eliminar carpeta (mrdit+nombreCarpeta)
- rm -rf : eliminar carpeta y todo su contenido (em -rf + nombreCarpeta)

### Para crear un nuevo archivo
- touch : crear un nuevo archivo (touch+nombreNuevoArchivo)

## Flags
-l : para obtener toda la información del archivo
-v : para que te diga la versión del programa que tienes instalada
-y : para que te genere un nuevo proyecto con npm y que no te haga todas las preguntas
-D : para instalar paquete como dependencia de desarrollador
-g : para instalar el paquete solamente en el ordenador (de forma global)
-E : para mantener la versión exacta del paquete


# NODE
- ¿Qué es NODE?
Node.js® es un entorno de ejecución de JavaScript multiplataforma, de código abierto y gratuito que permite a los desarrolladores crear servidores, aplicaciones web, herramientas de línea de comando y scripts.

# NPM (Node Package Manager)
- ¿Qué es?
Es el sistema de gestión de paquetes por defecto de NODE.js , existen otros conmo yarn, pnpm, bun, etc... Estos nos permiten gestionar módulos (instalarlos, eliminarlos y actualizarlos siempre dentro de la carpeta node_modules)

- npm init : para iniciar npm
- npm i : para instalar el paquete (npm init + nombrePaquete)
- npm i nombre-paquete@(versión) : instalar paquete de una versión actualizable
- npm i nombre-paquete@(versión) -E : instalar paquete de una versión específica (no actualizable)
- npm i nombre-paquete@latest : instalar la última versión del paquete
- npm list -g --depth=0 : para ver una lista de paquetes instalados de manera global 

```json
{
    "dependencies":{
        "nombre-paquete": "^1.2.0", //Actualizable a la 1.X.Y (versión por defecto)
        "nombre-paquete": "~1.2.0", //Actualizable a la 1.2.X
        "nombre-paquete": "1.2.0", //exacta
        "nombre-paquete": ">1.2.0", //Todas las versiones mayores a 1.2.0
        "nombre-paquete": "<1.2.0" //Todas las versiones menores a 1.2.0
    }
}
```





