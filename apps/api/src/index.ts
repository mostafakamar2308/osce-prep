import { clerkMiddleware } from '@clerk/express';
import express from 'express';

const app = express();
const port = '3000';

app.use(clerkMiddleware());

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log('Response sent');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
