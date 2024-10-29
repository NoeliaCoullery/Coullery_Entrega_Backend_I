export const userValidator = (req, res, next) => {

if (
    req.body.email === undefined ||
typeof req.body.email !== "string" ||
req.body.password === undefined ||
typeof req.body.password !== "string"
 ) 
    res.status(400).json({message: "Inválido. Se requiere email o contraseña"});
 return next (); 
};