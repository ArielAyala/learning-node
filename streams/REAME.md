# Streams
Los Readable y Writeable streams tienen los siguientes eventos y funciones respectivamente:

## Readable
### Eventos
- data. Se dispara cuando recibe datos.
- end. Se dispara cuando termina de recibir datos.
- error. Se dispara cuando hay un error.

### Funciones
- pipe
- unpipe
- read
- push

Ejemplos de readable stream
```javascript
const {Readable}= require('stream');
const readableStream = new Readable();

readableStream.push(`${0/0} `.repeat(10).concat('Batman, Batman'));
readableStream.push(null);

readableStream.pipe(process.stdout);
```

```javascript
const { Readable } = require('stream');
const readableStream = new Readable({
    read(size) {
        setTimeout(() => {
            if (this.currentCharCode > 90) {
                this.push(null);
                return;
            }
            this.push(String.fromCharCode(this.currentCharCode++))
        }, 100);
    }
});

readableStream.currentCharCode = 65;
readableStream.pipe(process.stdout);
```





## Writeable
### Eventos
- drain. Se dispara cuando emite datos.
- finish. Se dispara cuando termina de emitir.
- error. Se dispara cuando hay un error.

### Funciones
- write
- end
- Recuerda que tienen estos eventos porque los heredan de la clase EventEmitter


Ejemplo de writable
```javascript
const { Writable } = require('stream');

const writableStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
})

process.stdin.pipe(writableStream);

```