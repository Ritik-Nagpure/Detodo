import express, { Express } from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'This is landing page but don just watch this is api link it to an ui' });
}
);

app.get('/todo', (req: Request, res: Response) => {
  res.json([1, 2, 3, 4, 5]);
});

app.post('/todos', (req: Request, res: Response) => {
  const todo: string = req.body.todo;
  console.log(`Received todo: ${todo}`);
  console.log(req)
  res.status(201).json({ message: `Todo "${todo}" created successfully!`});
});

app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}/`);
});