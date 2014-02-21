"use strict";

var fs = require("fs");

fs.readFile(process.argv[2], function (e, d) {
  console.log(d.toString().split("\n").length - 1);
});
