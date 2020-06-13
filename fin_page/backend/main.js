var http = require('http');
var fs = require('fs');
var url = require('url');
var req = require('request');

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  if (pathname === '/') {
    if (queryData.id === undefined) {
      fs.readFile('../front/index.html', function (error, html) {
        if (error) {
          throw error;
        }
        response.writeHead(200);
        response.end(html);
      })
    }
  }
  else if (pathname === '/user') {
    try {
      if (queryData.id === undefined) {
        var error = new Error("invalid user id")
        throw error
      }
      var user_name = queryData.id
      fs.readFile(`../front/${user_name}.html`, function (error, html) {
        if (error) {
          throw error;
        }
        response.writeHead(200);
        response.end(html);
      })
    }
    catch (error) {
      console.error(error)
    }
  }
  else if (pathname === '/upload') {
    response.writeHead(200);
    response.end(html);
  }
  else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000);