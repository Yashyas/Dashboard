const router = require('express').Router();
const auth = require('../middleware/auth');
const taskController = require('../controllers/taskController');
const { body } = require('express-validator');

router.post('/', auth, [ body('title').notEmpty().withMessage('Title required') ], taskController.createTask);
router.get('/', auth, taskController.getTasks);
router.put('/:id', auth, taskController.updateTask);
router.delete('/:id', auth, taskController.deleteTask);

module.exports = router;
