const url = require("url");
const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    let link = url.parse(req.url, true);
    let filename = "./html" + link.pathname;
    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, { "content-type": "text/html" });
        return res.end("file not found");
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        return res.end();
      }
    });
    console.log(filename);
  })
  .listen(3000);
