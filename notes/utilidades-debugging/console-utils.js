// %s  significa string
// %d significa numero
// %j significa json

// console.log('Una %s y un %s', 'perrito', 'gatito');

// console.info('Hello world');
// console.warn('hello error')

// console.assert(42 == '42');
// console.assert(42 === '42');

// console.trace('hello');

const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('Hello from foo');