# SQL vs NoSQL

- SQL: MySQL, MariaDB, PostgressSQL, SQLlite, Oracle, SQL Server
- NoSQL: MongoDB, CouchDB, Redis(ya no es open source), Cassandra, Firebase(Google Cloude), AWS(Amazon Web Services)

Para SQL se prefieren utilizar casos de aplicaciones con transaciones y relaciones y estructuras complejas, como por ejemplo:

- CMS -> Gestiona contenido (Wordpress)
- Contabilidad (quickbooks)
- Sistemas de inventario (SAP)
- Facturación (Facturascripts)
- Sistema de rrhh (SAP)


Para NoSQL se utiliza para aplicaciones que requieren escalabilidad "horizontal" y rendimiento:

- MongoDB:
 * Sitema de geolocalización (Google Maps)
 * Sistemas de recomendaciones (Netflix, Disney+)
 * Análisis de datos (Google Analytics)
 * Redes sociales (FB, X, Insta...)
 * Mensajería (Whatsapp, Telegram...)


## Estructura

| MySQL | MongoDB |
| --- | --- |
| Tablas | Colecciones |
| Files/registros | Documentos |
| Columnas | Campos |
| Esquema rígido | Esquema Flexible |
| JOINS para relaciones | Referencias |


## Características de MySQL
- MySQL require definir claves primarias y foraneas (PrimaryKey & ForaneanKey).
- Funciones agregadas (SUM, AGV, COUNT, MIN, MAX)
- Funciones escalares (UPPER, LOWER, CONCAT, SUBSTRING)
- Funciones de Fecha y hora (NOW, DATE, TIME, TIMESTAMP, YEAR...)
- Subconsulta (SELECT dentro de otro SELECT)
- Funciones de cadenas (LENGTH, TRIM, LETRIM, RTRIM, REPLACE...)

## Características MongoDB (NoSQL)
- Es más flexible, no requiere completar todos sus campos
- No tenemos que definir IDs, MongoDB lo hace por nosotros
- Trabaja en un esquema similar a objetos JSON (BSON)

## Instalación Windows
 https://www.mongodb.com/try/download/community


### Contraseña MONGODB: Qs1bXY8wrv1vLktc

 