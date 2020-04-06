const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const pathToUsers = path.join(__dirname, '../../data/users.json');

const getAll = async () => {
  const jsonUsers = await readFile(pathToUsers, 'utf-8');
  const users = JSON.parse(jsonUsers);
  return users;
};

const getByID = async id => {
  const users = await getAll();
  return users.find(user => user.id === id);
};

const setUser = users => {
  return writeFile(pathToUsers, JSON.stringify(users));
};

const addUser = async obj => {
  const users = await getAll();
  const newUsers = users.concat(obj);
  setUser(newUsers);
};

const changeUser = async (id, obj) => {
  const users = await getAll();
  const index = users.findIndex(item => item.id === id);
  users[index].name = obj.name;
  users[index].login = obj.login;
  users[index].password = obj.password;
  setUser(users);
  return users[index];
};

const deleteUser = async id => {
  const users = await getAll();
  const newUsers = users.filter(item => item.id !== id);
  setUser(newUsers);
  return users.length === newUsers.length;
};

module.exports = { getAll, getByID, addUser, changeUser, deleteUser };
