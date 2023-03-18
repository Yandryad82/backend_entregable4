const { Router } = require("express");
const { createMessage } = require("../controllers/messages.controller");
const { createMessageValidator } = require("../validators/message.validators");

const router = Router();

router.post('/api/v1/messages', createMessageValidator, createMessage);

module.exports = router;