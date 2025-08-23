import express from 'express';
import cors from 'cors';
import todoRoutes from '../routes/todo.route.js'
import userRoutes from '../routes/user.route.js'


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);

export default app