const UsersService = require('../services/users.service');

const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UsersService.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

const getUser = async (req, res, next) => {
  try {
    const result = await UsersService.get();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

const getConversationsByUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UsersService.getConversationsByUser(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getUser,
  getConversationsByUser,
};