const express = require('express');
const app = express('./config/index');
const { config } = require('./config');

const moviesApi = require('./routes/movies');

// app.get('/', (req, res) => {
//   res.send('hello world');
// });

// app.get('/json', (req, res) => {
//   res.json({ hello: 'world' });
// });

moviesApi(app);

app.listen(config, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
