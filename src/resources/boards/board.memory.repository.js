const Board = require('./board.model');

let boards = [];

const getAll = async () => {
  return boards;
};

const getById = async id => {
  const board = boards.find(item => item.id === id);
  return board;
};

const createBoard = async ({ title, columns }) => {
  const board = new Board({ title, columns });
  boards.push(board);
  return board;
};

const updateBoardById = async ({ id, title, columns }) => {
  const board = boards.find(item => item.id === id);
  if (board) {
    if (title) board.title = title;
    if (columns) board.columns = columns;
  }
  return board;
};

const deleteBoardById = async id => {
  const board = boards.find(item => item.id === id);
  if (board) boards = boards.filter(item => item.id !== id);
  return board;
};

module.exports = {
  getAll,
  getById,
  createBoard,
  updateBoardById,
  deleteBoardById
};
