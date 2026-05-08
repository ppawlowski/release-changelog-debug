const { Router } = require('express');
const usersController = require('../controllers/usersController');

const router = Router();

router.get('/', usersController.list);
router.get('/:id', usersController.getById);
router.post('/', usersController.create);

module.exports = router;
