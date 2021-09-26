
# Sistema operativo y sistema de archivos

- **os**. Sirve para consultar y manejar los recursos del sistema operativo.
- **fs**. Sirve para administrar (copiar, crear, borrar etc.) archivos y directorios.

Los métodos contenidos en estos módulos (y en todo Node.js) funcionan de forma asíncrona por default, pero también se pueden ejecutar de forma síncrona, por ejemplo el método *readFile()* tiene su versión síncrona *readFileSync()*.

Ejemplos

Leyendo saltos de linea de un archivo txt de forma **síncrona**
```javascript
const fs = require('fs');

try {
    const file = process.argv[2]; // Obtiene el tercer valor ingresado en la terminal, que en este ejemplo es el path de un archivo txt

    const content = fs.readFileSync(file).toString(); // Obtiene el buffer y lo convierte a string
    const saltosLinea = content.split('\n').length; // Con el split se detectan los saltos de lines
    console.log(saltosLinea);
} catch (error) {
    console.log(error);
}
```

Leyendo saltos de linea de un archivo txt de forma **asíncrona**
```javascript
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
```
