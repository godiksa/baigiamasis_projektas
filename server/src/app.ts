import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDatabase from './config/db.js';
// Controllers
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from './controllers/user.controllers.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

// Starting server
const startServer = () =>
  app.listen(PORT, () => console.log('Starting server on port: ' + PORT));

// Database
connectDatabase(startServer);

// Routes
// -- GET /users
app.get('/users', getUsers);

// -- POST /users
app.post('/users', addUser);

// -- PUT /user/:id
app.put('/users/:id', updateUser);

// -- DELETE /user/:id
app.delete('/users/:id', deleteUser);
