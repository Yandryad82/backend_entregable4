const UserService = require('../services/users.service');
const bcrypt = require('bcrypt');

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.getUser(email);
    if (!user) {
      return next({
        status: 400,
        message: 'Invalid email',
        error: 'User not found'
      });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return next({
        status: 400,
        message: "The password is dosen't match",
        error: 'Invalid password'
      });
    }
    const {
      id,
      firstname,
      lastname,
      email: userEmail,
    } = user;
    res.json({
      id, firstname, lastname, email: userEmail
    });
  } catch (error) {
    next(error)
  }
};

module.exports = {
  userLogin
};

