//Esto lo hice yo por mi cuenta por

var crypto = require('crypto');
var tokenSecret = crypto.randomBytes(64).toString('hex');
console.log(tokenSecret);