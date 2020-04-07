const User = require('./user.model');

let users = [
  {
    id: '1',
    name: 'Vasiliy',
    login: 'userVasiliy',
    password: 'passwordVasiliy'
  },
  {
    id: '2',
    name: 'nikita',
    login: 'userNikita',
    password: 'passwordNikita'
  },
  {
    id: '3',
    name: 'Valera',
    login: 'userValera',
    password: 'passwordValera'
  }
];

const getAll = async () => {
  return users;
};

const getById = async id => {
  const user = users.find(item => item.id === id);
  return user;
};

const createUser = async ({ name, login, password }) => {
  const user = new User({ name, login, password });
  users.push(user);
  return user;
};

const updateUserById = async ({ id, name, login, password }) => {
  const user = users.find(item => item.id === id);
  if (user) {
    if (name) user.name = name;
    if (login) user.login = login;
    if (password) user.password = password;
  }
  return user;
};

const deleteUserById = async id => {
  const user = users.find(item => item.id === id);
  if (user) users = users.filter(item => item.id !== id);
  return user;
};

module.exports = {
  getAll,
  getById,
  createUser,
  updateUserById,
  deleteUserById
};
