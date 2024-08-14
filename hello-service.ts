import express from 'express';

const app = express();
const port = 8002;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Hello service listening at http://localhost:${port}`);
});