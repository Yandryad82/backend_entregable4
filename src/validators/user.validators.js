const {check, validationResult, param} = require('express-validator');
const validateResult = require("../utils/validate");

const createUserValidator = [
  check('username', 'El nombre de usuario no debe ser nulo')
   .exists()
   .withMessage('El nombre de usuario debe existir')
   .notEmpty()
   .withMessage('El nombre de usuario no debe ser vacio')
   .isString()
   .withMessage('El nombre de usuario no debe ser un numero')
   .isLength({min:6})
   .withMessage('El nombre de usuario debe tener al menos 6 caracteres'),
  check('email', 'Verifica el email')
   .exists()
   .withMessage('El email debe existir')
   .notEmpty()
   .withMessage('El email no debe ser vacio')
   .isString()
   .isLength({min:7, max:50})
   .isEmail()
   .withMessage('El email no es valido'),
  check('password', 'Verifica la contraseña')
   .exists()
   .withMessage('El campo contraseña debe existir')
   .notEmpty()
   .withMessage('El campo contraseña no debe estar vacio')
   .isString()
   .isLength({min:8})
   .withMessage('La contraseña debe tener al menos 8 caracteres'),
    (req, res, next) => {
    validateResult(req, res, next);
   },
];

const updateUserValidator = [
  param("id").isInt().withMessage("El id debe ser un numero entero"),
  check("name")
    .isString()
    .exists()
    .withMessage("No se encuentra el nombre para el usuario")
    .notEmpty()
    .withMessage("EL nombre no debe ser un string vacio"),
  check("lastname")
    .isString()
    .exists()
    .withMessage("No se encuentra el nombre para el usuario")
    .notEmpty()
    .withMessage("EL nombre no debe ser un string vacio"),
  
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
    createUserValidator,
    updateUserValidator,
    
}