import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import type { Request, Response, Express } from 'express';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/', (req: Request, res: Response) => {
  console.log('hi')
  res.json({ message: 'This is landing page but don just watch this is api link it to an ui' });
}
);

app.get('/todo', (req: Request, res: Response) => {
  res.json([1, 2, 3, 4, 5]);
});

app.post('/todos', (req: Request, res: Response) => {
  const todo: object = req.body;
  console.log(`Received todo: ${todo}`);


  const { taskName, taskStatus } = req.body;
  console.log(taskName, taskStatus);

  res.status(201).json({ message: `Todo "${taskName}" created successfully!` });
});

app.get('/chkdevserv', (req: Request, res: Response) => {
  res.send('This works')
})

app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}/`);
});