"use strict";

var fs = require("fs");

fs.readdir(process.argv[2], function (error, files) {
  files.filter(function (f) { return f.indexOf("." + process.argv[3]) > -1; }).forEach(function (f) { console.log(f); });
});
