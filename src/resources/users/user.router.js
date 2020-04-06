const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await usersService.getByID(id);
    if (!user) {
      res.status(200).json(User.toResponse(user));
      res.end();
      return;
    }
    res.json(User.toResponse(user));
  } catch (error) {
    res.status(404).send({ message: `There no user with id = ${id}` });
  }
});

router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    if (!user) {
      res.status(400);
      res.end('Bad request');
      return;
    }
    await usersService.postUser(user);
    res.json(User.toResponse(user));
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end('Smth went wrong');
  }
});

router.put('/:id', async (req, res) => {
  try {
    const user = await usersService.putUser(req.params.id, req.body);
    if (!user) {
      res.status(404);
      res.end();
      return;
    }
    res.json(User.toResponse(user));
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end('Smth went wrong');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await usersService.delUser(req.params.id);
    if (result) {
      res.status(404);
      res.end();
      return;
    }
    res.status(204);
    res.end('The user has been deleted');
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end('Smth went wrong');
  }
});

module.exports = router;
