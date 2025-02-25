export const Saludar = (req, res, next) =>{
    console.log("Hola gente!")
    next();
}
export const Despedir = (req, res, next) =>{
    console.log("Adios gente!")
    next();
}

