"use strict";

var fs = require("fs");

module.exports = function (path, ext, cb) {
  fs.readdir(path, function (err, files) {
    if (err) { return cb(err); }

    var filtered = files.filter(function (f) { return f.indexOf("." + ext) > -1; });

    return cb(null, filtered);
  });
};

