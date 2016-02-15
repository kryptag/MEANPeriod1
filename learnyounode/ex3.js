var fs = require("fs");
var tekst;
var lines;
tekst = fs.readFileSync(process.argv[2]).toString();
Lines = tekst.split("\n");
console.log(Lines.length - 1);