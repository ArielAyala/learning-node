const fs = require('fs');

fs.copyFile('naranja.txt', 'limon.txt', error => {
    if (error)
        console.log(error);

    console.log('Naranja.txt fue copiado como limon.txt');
})