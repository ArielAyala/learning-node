const fs = require('fs');

const file = process.argv[2]; // Obtiene el tercer valor ingresado en la terminal, que en este ejemplo es el path de un archivo txt

if (!file) {
    throw new Error('Debes especificar el archivo que quieres leer');
}

fs.readFile(file, (error, content) => {
    if (error) {
        return console.log(error);
    }

    const saltosLinea = content.toString().split('\n').length; // Con el split se detectan los saltos de lines
    console.log(saltosLinea);

})
