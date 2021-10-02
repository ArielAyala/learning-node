const express = require('express');
const app = express('./config/index');
const { config } = require('./config');

const moviesApi = require('./routes/movies');

const { logErrors, errorHandler } = require('./utils/middleware/errorHandler')

// body parser
app.use(express.json())


app.use(logErrors);
app.use(errorHandler);

moviesApi(app);

app.listen(config, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
