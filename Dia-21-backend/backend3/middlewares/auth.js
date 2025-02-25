//middleware de autentificación

const Auth = (req, res, next) =>{
    console.log("Estoy autenticando mi usuario");
    next();
}

export default Auth;