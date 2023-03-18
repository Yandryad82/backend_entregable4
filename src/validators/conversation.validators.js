const { check, validationResult, param } = require('express-validator');

const validateResult = require('../utils/validate');

const createConversationValidator = [
  check('title', 'El titulo de la conversacion no debe ser nulo')
  .exists()
  .withMessage('El campo titulo debe existir')
  .isLength({min:5})
   .withMessage('El titulo debe contener al menos 5 caracteres'),
  (req, res, next) => {
    validateResult(req, res, next);
   },
];

module.exports = {
  createConversationValidator,
};