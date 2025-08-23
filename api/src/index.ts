import app from './app/app.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is listeingin on port ${port}`)
});
