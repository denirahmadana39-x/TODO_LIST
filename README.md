# TODO_LIST API

REST API Todo List yang dibangun menggunakan Node.js, Express.js, MySQL, dan JWT Authentication. API ini memungkinkan pengguna untuk melakukan registrasi, login, serta mengelola daftar tugas (Todo) secara aman menggunakan autentikasi berbasis token.

## 🚀 Features

* User Registration
* User Login
* JWT Authentication
* Password Hashing (bcryptjs)
* CRUD Todo
* MySQL Database Integration
* Input Validation
* Error Handling
* RESTful API Architecture

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MySQL

### Authentication

* JWT (JSON Web Token)
* bcryptjs

### Development Tools

* Nodemon
* Postman
* Git & GitHub

---

## 📂 Project Structure

```text
TODO_LIST/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── utils/
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/denirahmadana39-x/TODO_LIST.git
cd TODO_LIST
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=3310
DB_USER=root
DB_PASSWORD=
DB_NAME=todo_api

JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
```

### Run Development Server

```bash
npm run dev
```

### Run Production Server

```bash
npm start
```

---

## 🔐 Authentication Endpoints

### Register

```http
POST /api/auth/register
```

Request Body:

```json
{
  "username": "deni",
  "email": "deni@example.com",
  "password": "password123"
}
```

---

### Login

```http
POST /api/auth/login
```

Request Body:

```json
{
  "email": "deni@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "token": "jwt_token"
}
```

---

## ✅ Todo Endpoints

### Get All Todos

```http
GET /api/todos
```

### Get Todo By ID

```http
GET /api/todos/:id
```

### Create Todo

```http
POST /api/todos
```

Request Body:

```json
{
  "title": "Learn Node.js",
  "description": "Study Express.js and JWT"
}
```

### Update Todo

```http
PUT /api/todos/:id
```

### Delete Todo

```http
DELETE /api/todos/:id
```

---

## 🔒 Protected Routes

Add JWT Token in Header:

```http
Authorization: Bearer <token>
```

---

## 📬 API Testing

You can test the API using:

* Postman
* Thunder Client
* Insomnia

---

## 🎯 Future Improvements

* Refresh Token Authentication
* Role Based Access Control (RBAC)
* Pagination & Filtering
* Swagger Documentation
* Docker Support
* Unit Testing

---

## 👨‍💻 Author

**Deni Rahmadana**

* GitHub: https://github.com/denirahmadana39-x
* Email: [denirahmadana39@gmail.com](mailto:denirahmadana39@gmail.com)

---

## 📄 License

This project is intended for learning, portfolio, and educational purposes.
