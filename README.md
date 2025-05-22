# 🎯 Fullstack Todo App 

This project is a Fullstack Todo application built with React for the frontend and Express (Node.js) for the backend. It uses SQLite and Sequelize ORM for persistent data storage.

## Features

- Add, list, edit, and delete tasks
- RESTful API communication between frontend and backend
- Responsive UI with Bootstrap
- Persistent storage with SQLite

## Installation

### Backend

```bash
cd server
npm install
cp .env.example .env # Create your .env file and configure as needed
npm start
```

### Frontend

```bash
cd client
npm install
# Add REACT_APP_URL variable to your .env file with your backend API address
npm start
```

## Usage

1. Start both backend and frontend as described above.
2. Open your browser and go to `http://localhost:3000`.
3. Add, edit, or delete your tasks.

## Project Structure

```
fullstack-todo-app/
├── client/   # React frontend
└── server/   # Express + Sequelize + SQLite backend
```

## License

MIT