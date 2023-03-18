const { Router } = require("express");
const { createConversationPrivate, createConversationGroup, deleteConversation, getConversation } = require("../controllers/conversations.controller");
const { createConversationValidator } = require("../validators/conversation.validators");

const router = Router();

router.post('/api/v1/conversations/private',createConversationValidator ,createConversationPrivate);

router.post('/api/v1/conversations/group',createConversationValidator ,createConversationGroup);

router.delete('/api/v1/conversations/:id', deleteConversation);

router.get('/api/v1/conversations/:id', getConversation)


module.exports = router;