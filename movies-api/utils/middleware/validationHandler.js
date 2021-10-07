const boom = require('@hapi/boom');
const Joi = require('@hapi/joi');

/**
 * Validate the data against a schema
 * @param {*} data Value to validate
 * @param {*} schema Required schema
 * @returns 
 */
function validate(data, schema) {
    const { error } = schema.validate(data)
    return error
}

function validationHandler(schema, check = 'body') {
    return function (req, res, next) {
        const error = validate(req[check], schema);
        // error ? next(new Error(error)) : next();
        error ? next(boom.badRequest(error)) : next();
    }
}

module.exports = validationHandler;