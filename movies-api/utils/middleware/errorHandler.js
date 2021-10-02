const { config } = require('../../config/')

function withErrorStack(error, stack) {
    if (config.dev) {
        return { error, stack }
    }

    return error;
}

function logErrors(error, req, res, next) {
    console.log(error);
    next(error);
}

function errorHandler(error, req, res, next) { // eslint-disable-line
    res.status(error.status || 500);
    res.json(withErrorStack(error.message, error.stack))
}

module.exports = {
    logErrors,
    errorHandler
}