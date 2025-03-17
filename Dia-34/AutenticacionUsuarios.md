# Autenticación de Usuarios

# Autenticación vs Autorización

![Img Auth](https://hassansaleh.ams3.cdn.digitaloceanspaces.com/express-user-authentication/Passport-Explanation.png)

- Autenticación: verificar la identidad del usuario (¿quien eres?)
- Autorización: determinar a que recursos puedes acceder (¿qué puedes hacer?)

## JWT (Json Web Token)

- web [JWT] (https://jwt.io)
- Token string compacto y autocontenido para transmitir información de forma segura (ciudado, el token en sí no está encriptado, no enviar claves o datos sensibles en el JWT)
- HEADER: Algoritmo de firma y tipo de token.
- PAYLOAD: Datos del usuario como ID, rol, expiracion.
- SIGNATURE: Garantía que el token que no ha sido modificado.

## Almacenamiento del Token

- `LocalStorage`: Almacenamiento persistente en el navegador.
    + Ventajas: Fácil de implementar, permanece después de cerrar el navegador.
    + Desventajas: Es vulnerable a ataques XSS

- Cookies: Datos enviados con cada petición del dominio.
    + Ventajas: Puede ser configurado como HttpsOnline (no la puede leer JS)
    + Desventajas: Límite de 4kb, vulnerable a CSRF


## Flujo de autenticación:

1. Usuario envía las credenciales de login (email/pass)
2. Servidor valida los datos y crea un TOKEN JWT. Se la devuelve al cliente.
3. El cliente recibe los datos y guarda el token en LocalStorage.
4. El cliente incluye el token en cada petición fetch a rutas protegidas.
5. Servidor verifica el token antes de procesar la petición a la ruta protegida.


## Sesiones vs Token

- `Token`: No poseen un estado, toda la información necesaria está dentro del Token.
- Sesiones: El estado se guarda en el servidor y se usan cookies con id de Session.


## Seguridad

- XSS (Cross-site Scriptiong): inyección de código malicioso que puede robar el token del localStorage de otros sitios.
- CSRF (Cross-site Request Forgery): Ejecutar acciones no autorizadas aprovechando la sesión activa de un usuario.
- Flag HttpsOnly: Flag para cookies que impide su acceso de JS.
- Flag SameSite: Reestricción para enviar cookies solo a sistios del mismo dominio.


## Expiración y Refresh Tokens

- Los token JWT debeln tener un tiempo de expiración corto (15-60min)
- Refresh Tokens: Tokens de larga duración para obtener nuevos tokens de acceso sin requerir login.


# Integrar en el proyecto

- npm i jsonwebtoken
- En el archivo .env ponemos una nueva variable para el token:

```bash
# Llave secreta para JWT
JWT_SECRET = "my-super-secret-pass"
```

- páginas para generar Tokens:
    + https://randomkeygen.com/
    +  https://auth-secret-gen.vercel.app/






