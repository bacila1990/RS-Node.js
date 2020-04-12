const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res, next) => {
  try {
    const boards = await boardsService.getAll();
    res.status(200).json(boards.map(Board.toResponse));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const board = await boardsService.getById(req.params.id);
    if (board) res.status(200).json(Board.toResponse(board));
    else res.status(404).json(`Board with id ${req.params.id} not found`);
  } catch (err) {
    return next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const board = await boardsService.createBoard(req.body);
    res.status(200).json(Board.toResponse(board));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const board = await boardsService.updateBoardById(req.params.id, req.body);
    if (board) res.status(200).json(Board.toResponse(board));
    else res.status(404).json(`Board with id ${req.params.id} not found`);
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    const board = await boardsService.deleteBoardById(req.params.id);
    if (board) res.status(204).json(`Board with id ${req.params.id} deleted`);
    else res.status(404).json(`Board with id ${req.params.id} not found`);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
