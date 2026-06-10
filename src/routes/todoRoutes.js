const express = require('express');

const todoController = require('../controllers/todoController');
console.log('todoController =', todoController);

const verifyToken = require('../middleware/authMiddleware');
console.log('verifyToken =', typeof verifyToken);

const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = todoController;

console.log(typeof createTodo);
console.log(typeof getTodos);
console.log(typeof updateTodo);
console.log(typeof deleteTodo);

const router = express.Router();

router.use(verifyToken);

router.post('/', createTodo);
router.get('/', getTodos);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;