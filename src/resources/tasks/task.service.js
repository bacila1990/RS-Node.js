const tasksRepo = require('./task.memory.repository');

const getAllByBoard = boardId => tasksRepo.getAllByBoard(boardId);

const getById = id => tasksRepo.getById(id);

const createTask = (boardId, params) => {
  const { title, order, description, userId, columnId } = params;
  return tasksRepo.createTask({
    title,
    order,
    description,
    userId,
    columnId,
    boardId
  });
};

const updateTaskById = (id, params) => {
  const { title, order, description, userId, columnId, boardId } = params;
  return tasksRepo.updateTaskById({
    id,
    title,
    order,
    description,
    userId,
    columnId,
    boardId
  });
};

const deleteTaskById = id => tasksRepo.deleteTaskById(id);

const unassignById = userId => tasksRepo.unassignById(userId);

const deleteAllByBoard = boardId => tasksRepo.deleteAllByBoard(boardId);

module.exports = {
  getAllByBoard,
  getById,
  createTask,
  updateTaskById,
  deleteTaskById,
  unassignById,
  deleteAllByBoard
};
