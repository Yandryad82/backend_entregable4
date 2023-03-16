const ConversationsService = require('../services/conversations.service');

const createConversationPrivate = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await ConversationsService.createConversationPrivate(data);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const createConversationGroup = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await ConversationsService.createConversationGroup(data);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteConversation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await ConversationsService.deleteConversation(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getAllConversation = async (req, res, next) => {
  try {
    const result = await ConversationsService.getAllConversation();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createConversationPrivate,
  createConversationGroup,
  deleteConversation,
  getAllConversation,
};