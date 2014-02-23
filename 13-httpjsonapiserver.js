"use strict";

var url = require("url"),
    http = require("http");

function parsetime(time) {
  return {
    hour:   time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
}

function unixtime(time) {
  return {
    unixtime: time.getTime(),
  };
}

var server = http.createServer(function (req, res) {
  var parsed = url.parse(req.url, true),
      time = new Date(parsed.query.iso);

  if (req.method !== "GET" ) { return res.end(); }

  if (parsed.pathname === "/api/parsetime") {
    time = parsetime(time);
  }

  if (parsed.pathname === "/api/unixtime") {
    time = unixtime(time);
  }

  //res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(time));
});

server.listen(process.argv[2]);
