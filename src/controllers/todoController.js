const db = require('../config/db');

exports.createTodo = (req, res) => {
  const { title } = req.body;

  const sql = 'INSERT INTO todos (user_id, title) VALUES (?, ?)';

  db.query(sql, [req.user.id, title], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    res.status(201).json({
      message: 'Todo created',
    });
  });
};

exports.getTodos = (req, res) => {
  const sql = 'SELECT * FROM todos WHERE user_id = ?';

  db.query(sql, [req.user.id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    res.json(result);
  });
};

exports.updateTodo = (req, res) => {
  const { title, completed } = req.body;

  const sql = `
    UPDATE todos
    SET title = ?, completed = ?
    WHERE id = ? AND user_id = ?
  `;

  db.query(
    sql,
    [title, completed, req.params.id, req.user.id],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      res.json({
        message: 'Todo updated',
      });
    }
  );
};

exports.deleteTodo = (req, res) => {
  const sql = 'DELETE FROM todos WHERE id = ? AND user_id = ?';

  db.query(sql, [req.params.id, req.user.id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    res.json({
      message: 'Todo deleted',
    });
  });
};