const os = require('os');

console.log('CPU data:', os.cpus());
console.log('IP address:', os.networkInterfaces());
console.log('Free memory:', os.freemem());
console.log('Type OS:', os.type());
console.log('OS version:', os.version());
console.log('User info:', os.userInfo());