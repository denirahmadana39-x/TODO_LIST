const db = require('../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')


exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: 'All fields are required',
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

  db.query(sql, [username, email, hashedPassword], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    res.status(201).json({
      message: 'Register success',
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ?';

  db.query(sql, [email], async (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    const user = result[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: 'Wrong password',
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d',
      }
    );

    res.json({
      message: 'Login success',
      token,
    });
  });
};