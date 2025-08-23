import express from 'express';
import cors from 'cors';
import todoRoutes from './todos/todo.route.js'
import userRoutes from './users/user.route.js'
import { parseReqBody } from './utils/parseBody.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(parseReqBody);

app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);

export default app