const { userLogin } = require('../controllers/auth.controller');

const { Router } = require('express');

const router = Router();

router.post('/api/v1/auth/login', userLogin);

module.exports = router;