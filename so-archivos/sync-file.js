const fs = require('fs');

try {
    const file = process.argv[2]; // Obtiene el tercer valor ingresado en la terminal, que en este ejemplo es el path de un archivo txt

    const content = fs.readFileSync(file).toString(); // Obtiene el buffer y lo convierte a string
    const saltosLinea = content.split('\n').length; // Con el split se detectan los saltos de lines
    console.log(saltosLinea);
} catch (error) {
    console.log(error);
}