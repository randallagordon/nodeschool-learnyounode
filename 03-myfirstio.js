var fs = require("fs");

//console.log(fs.readFileSync(process.argv[2]).toString().split("\n").length - 1);

var fileName = process.argv[2];
var fileBuffer = fs.readFileSync(fileName);
var fileString = fileBuffer.toString();
var splitString = fileString.split("\n");
var numLines = splitString.length - 1;
console.log(numLines);
