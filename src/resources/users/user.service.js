const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getByID = id => usersRepo.getByID(id);

const postUser = obj => usersRepo.addUser(obj);

const putUser = (id, obj) => usersRepo.changeUser(id, obj);

const delUser = id => usersRepo.deleteUser(id);

module.exports = { getAll, getByID, postUser, putUser, delUser };
