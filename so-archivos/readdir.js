const fs = require('fs');

const files = fs.readdir(__dirname, (error, files)=> {
    if (error)
        return console.log(error);

    console.log(files);
})
