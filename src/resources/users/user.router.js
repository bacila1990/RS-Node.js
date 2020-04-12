const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res, next) => {
  try {
    const users = await usersService.getAll();
    res.status(200).json(users.map(User.toResponse));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const user = await usersService.getById(req.params.id);
    if (user) res.status(200).json(User.toResponse(user));
    else res.status(404).json(`User with id ${req.params.id} not found`);
  } catch (err) {
    return next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const user = await usersService.createUser(req.body);
    res.status(200).json(User.toResponse(user));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const user = await usersService.updateUserById(req.params.id, req.body);
    if (user) res.status(200).json(User.toResponse(user));
    else res.status(404).json(`User with id ${req.params.id} not found`);
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    const user = await usersService.deleteUserById(req.params.id);
    if (user) res.status(204).json(`User with id ${req.params.id} deleted`);
    else res.status(404).json(`User with id ${req.params.id} not found`);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
