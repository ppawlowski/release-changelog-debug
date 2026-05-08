const usersService = require('../services/usersService');

async function list(req, res, next) {
  try {
    res.json(await usersService.list());
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const user = await usersService.getById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json(user);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const user = await usersService.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}

module.exports = { list, getById, create };
