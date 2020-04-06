const boardsRepo = require('./board.memory.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => boardsRepo.getAll();

const getById = id => boardsRepo.getById(id);

const createBoard = params => {
  const { title, columns } = params;
  return boardsRepo.createBoard({ title, columns });
};

const updateBoardById = (id, params) => {
  const { title, columns } = params;
  return boardsRepo.updateBoardById({ id, title, columns });
};

const deleteBoardById = async id => {
  await tasksService.deleteAllByBoard(id);
  return boardsRepo.deleteBoardById(id);
};

module.exports = {
  getAll,
  getById,
  createBoard,
  updateBoardById,
  deleteBoardById
};
