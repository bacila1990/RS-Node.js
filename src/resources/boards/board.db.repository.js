const Board = require('./board.model');

const getAll = async () => {
  return Board.find({});
};

const getById = async id => {
  return Board.findOne({ _id: id });
};

const createBoard = async board => {
  return Board.create(board);
};

const updateBoardById = async boardToUpdate => {
  return Board.findByIdAndUpdate({ _id: boardToUpdate.id }, boardToUpdate);
};

const deleteBoardById = async id => {
  return Board.findByIdAndDelete(id);
};

module.exports = {
  getAll,
  getById,
  createBoard,
  updateBoardById,
  deleteBoardById
};
