const express = require('express')
const cors = require("cors")

const authRoutes = require("./routes/authRoutes")
const todoRoutes = require("./routes/todoRoutes")

const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Todo API</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #0f172a;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }

        .container {
          text-align: center;
          background: #1e293b;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 0 20px rgba(0,0,0,.3);
        }

        h1 {
          color: #38bdf8;
        }

        .status {
          color: #22c55e;
          font-weight: bold;
        }

        ul {
          text-align: left;
        }

        a {
          color: #38bdf8;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Todo API</h1>
        <p class="status">Server Running Successfully</p>

        <h3>Available Endpoints</h3>

        <ul>
          <li>POST /api/auth/register</li>
          <li>POST /api/auth/login</li>
          <li>GET /api/todos</li>
          <li>POST /api/todos</li>
          <li>PUT /api/todos/:id</li>
          <li>DELETE /api/todos/:id</li>
        </ul>

        <p>Backend by Deni Rahmadana</p>
      </div>
    </body>
    </html>
  `);
});

console.log('authRoutes =', authRoutes);
console.log('todoRoutes =', todoRoutes);

app.use('/api/auth', authRoutes)
app.use('/api/todos', todoRoutes)


module.exports = app