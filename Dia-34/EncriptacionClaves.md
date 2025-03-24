# Encriptación de claves

Usaremos una librería llamada `bcrypt`

```bash
npm i bcrypt
```

- Lo importamos

## Uso

```js

import bcrypt from 'bcrypt';

//LOGIN

export const loginUser = async (req, res, next) =>{
  try{
    //recibir datos del request
    const {email, password} = req.body;

    //verificamos si existe el usuario
    const user = await Usuario.findOne({email});

    //termino la petición si el usuario no existe
    if(!user){
      return res.status(404).json({mensaje: "Credenciales incorrectas"});
    }

    //comparo la clave del request con la clave de la DB
    // password = 1234
    // user.password = kdhbfjhr74j5j6mw62 (encriptada)
    const isMatch = await bcrypt.compare(password, user.password) //comparamos si la contraseña es igual que la encriptada

    if(!isMatch) {return res.sratus(401).json({message: "Usuario o clave incorrectos!"})}
    

    //Creación de JWT Token y envío respuesta
    //...
    
 
    res.json({"mensaje": "login correcto!"})
  }catch(e){
    next(e);
  }
}

//REGISTER

export const registerUser = async (req, res, next) =>{
  try{
    //traer datos del body
    const {email, password, name} = req.body;

    //verificar si el usuario existe
    const existingUser = await Usuario.findOne({email});
    if(existingUser){
      return res.status(400).json({
        mensaje: "El usuario con ese email ya existe, si eres tú intenta hacer un login"
      });
    }

    // Generar un salt Key
    const salt = await bcrypt.genSalt(10); // 10 es seguro para claves, es la dificultad del hash

    // Hasth de nuestra clave
    const hashedPassword = await bcrypt.hash(password, salt);

    //crear el nuevo usuario
    const user = new Usuario({
        email:email,
        password:hashedpassword,
        name:name
    });
    await user.save();

    //Envío de respuesta
    //....
    
   
  }catch(e){
    next(e);
  }
}
```



## Encriptación

- La contraseña encriptada la podemos desencriptar

<!-- Encriptación -->
```js
password="tomasito"
password_encriptada="t0m4s1t0"
```

<!-- Desencriptación de una clave -->
```js
password_encriptada="d0l0r3s"
password="dolores"
```

### Hash

- No se puede volver atrás (no se puede desencriptar)

Es un sistema de seguridad que se inventó para seguridad, un código alfanumérico.

```js
password="Andreita"
password_hasheada="$2y$10$TV1FgmuW4hkSGjJDYAOL8.b5OW9sDVig77MPR9ByXPAgw/.jxDdv6"
```