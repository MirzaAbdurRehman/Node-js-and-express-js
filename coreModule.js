const myFile = require('fs');

console.log("Core Module Node js");

myFile.writeFileSync('coremodule.txt',"this is non global core module");
