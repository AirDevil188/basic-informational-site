const http = require("node:http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    let q = req.url;

    const filename = req.url !== "/" ? "." + q + ".html" : "./index.html";
    fs.readFile(filename, function (err, data) {
      if (err) {
        fs.readFile("./404.html", function (err, data) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      }
    });
  })
  .listen(8080);
