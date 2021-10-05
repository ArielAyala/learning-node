const express = require('express');
const app = express('./config/index');
const { config } = require('./config');

const moviesApi = require('./routes/movies');

const { logErrors, errorHandler, wrapErros } = require('./utils/middleware/errorHandler')
const notFoundHandler = require('./utils/middleware/notFoundHandler')

// body parser
app.use(express.json())

moviesApi(app);

//Catch 404
app.use(notFoundHandler);

// Erros middlewares
app.use(logErrors);
app.use(wrapErros);
app.use(errorHandler);


app.listen(config, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
