"use strict";

var http = require("http");

var responses = [],
    responsesReturned = 0,
    requests = process.argv.slice(2);

requests.forEach(function (url, index) {
  http.get(url, function (res) {
    var body = "";
    res.setEncoding("utf8");
    res.on("data", function (data) { body += data; });
    res.on("end", function () {
      responsesReturned += 1;
      responses[index] = body;

      if (responsesReturned === requests.length) {
        responses.forEach(function (r) {
          console.log(r);
        });
      }
    });
  });
});
