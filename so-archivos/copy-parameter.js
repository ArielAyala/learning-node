const fs = require('fs');

const nameFile = process.argv[2];
const nameCopiedFile = process.argv[3];

fs.copyFile(nameFile, nameCopiedFile, error => {
    if (error)
        console.log(error);

    console.log(`${nameFile} copiado como ${nameCopiedFile}`);
})