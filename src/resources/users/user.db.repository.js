const User = require('./user.model');

const getAll = async () => {
  return User.find({});
};

const getById = async id => {
  return User.findOne({ _id: id });
};

const createUser = async user => {
  return User.create(user);
};

const updateUserById = async userToUpdate => {
  return User.findByIdAndUpdate({ _id: userToUpdate.id }, userToUpdate);
};

const deleteUserById = async id => {
  return User.findByIdAndDelete(id);
};

module.exports = {
  getAll,
  getById,
  createUser,
  updateUserById,
  deleteUserById
};
