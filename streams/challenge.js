// Crear una función en node que reciba na cadena de texto 
// y la convierta en camel case usando streams

const { Transform } = require('stream');

const cameCaseTransform = new Transform({
    transform(chunk, encoding, callback) {

        const toCamelCase = (chunkParameter) => {

            const chunkString = chunkParameter.toString(); // Se convierte a string
            const primeraLetra = chunkString.charAt(0);
            const primeraLetraMayuscula = primeraLetra.toUpperCase();

            const restoDelChunk = chunkString.slice(1);
            const restoDelChunkMinuscula = restoDelChunk.toLowerCase();

            const concat = primeraLetraMayuscula + restoDelChunkMinuscula;

            const stringSinEspacios = concat.replace(/ /g, "");
            return stringSinEspacios;
        }

        this.push(toCamelCase(chunk));

        callback();
    }
})

process.stdin.pipe(cameCaseTransform).pipe(process.stdout);