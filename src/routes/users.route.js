const { Router } = require('express');
const { createUser, getUser, getConversationsByUser } = require('../controllers/users.controller');
const { createUserValidator } = require('../validators/user.validators');


const router = Router();

router.get('/api/v1/users', getUser);

router.post('/api/v1/users', createUserValidator, createUser);

router.get('/api/v1/users/:id/conversations', getConversationsByUser);

module.exports = router;