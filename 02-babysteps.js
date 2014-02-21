"use strict";

var operands = process.argv.slice(2);

console.log(operands.reduce(function (total, operand) { return total += parseInt(operand, 10); }, 0));
