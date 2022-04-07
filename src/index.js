import express from 'express';
import add from './add.js';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/add/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const result = add(a, b);

  res.send(`${a} + ${b} = ${result}`);
});

app.listen(port, () => {
  console.info(`Example app listening on port ${port}`);
});
