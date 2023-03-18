const { check, validationResult, param } = require('express-validator');

const validateResult = require('../utils/validate');

const createMessageValidator = [
    check('content', 'El mensaje no debe ser nulo')
    .exists()
    .withMessage('El campo content debe existir'),
    (req, res, next) => {
        validateResult(req, res, next);
       },
];

module.exports = {
    createMessageValidator,
};