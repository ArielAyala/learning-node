const boom = require('@hapi/boom');
const Joi = require('@hapi/joi');

/**
 * Validate the data against a schema
 * @param {*} data Value to validate
 * @param {*} schema Required schema
 * @returns 
 */
function validate(data, schema) {
    // Esta verificación es necesaria, ya que cuando validamos el id pasado como parámetro, pasamos un objeto plano, por tanto, lo convertimos a uno de tipo joi. (de lo contrario no tenemos acceso al metood validate
    if (!schema.isJoi) {
        console.log(schema);
        schema = Joi.object({ ...schema });
    }
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