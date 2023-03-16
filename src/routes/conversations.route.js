const { Router } = require("express");
const { createConversationPrivate, createConversationGroup, deleteConversation, getAllConversation } = require("../controllers/conversations.controller");

const router = Router();

router.post('/api/v1/conversations/private', createConversationPrivate);

router.post('/api/v1/conversations/group', createConversationGroup);

router.delete('/api/v1/conversations/:id', deleteConversation);

router.get('/api/v1/conversations/', getAllConversation)


module.exports = router;