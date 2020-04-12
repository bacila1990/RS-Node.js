const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res, next) => {
  try {
    const { boardId } = req.params;
    const tasks = await tasksService.getAllByBoard(boardId);
    res.status(200).json(tasks.map(Task.toResponse));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const task = await tasksService.getById(req.params.id);
    if (task) res.status(200).json(Task.toResponse(task));
    else res.status(404).json(`Task with id ${req.params.id} not found`);
  } catch (err) {
    return next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const { boardId } = req.params;
    const task = await tasksService.createTask(boardId, req.body);
    res.status(200).json(Task.toResponse(task));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const task = await tasksService.updateTaskById(req.params.id, req.body);
    if (task) res.status(200).json(Task.toResponse(task));
    else res.status(404).json(`Task with id ${req.params.id} not found`);
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    const task = await tasksService.deleteTaskById(req.params.id);
    if (task) res.status(204).json(`Task with id ${req.params.id} deleted`);
    else res.status(404).json(`Task with id ${req.params.id} not found`);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
