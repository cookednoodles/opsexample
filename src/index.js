import express from 'express';
import add from './add.js';
import subtract from './subtract.js';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello Azure World!');
});

app.get('/add/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const result = add(a, b);

  res.send(`${a} + ${b} = ${result}`);
});
app.get('/subtract/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const result = subtract(a, b);

  res.send(`${a} - ${b} = ${result}`);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
