const express = require('express');
const app = express('./config/index');
const { config } = require('./config');

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/json', (req, res) => {
  res.json({ hello: 'world' });
});

app.listen(config, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
