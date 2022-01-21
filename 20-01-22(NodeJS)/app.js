const http = require("http");
const url = require("url");
const addr = "http://localhost:8080/default.htm?year=2017&month=february";
const port = process.env.PORT || 3000;
http
  .createServer((req, res) => {
    let str = url.parse(req.url, true);
    res.writeHead(200, { "content-Type": "text/html" });
    res.write("<center>");
    res.write("<h1>Welcome to Node.JS</h1>");
    res.write("Hello Kamal Singh");
    res.write(
      "<h2>Host url: " +
        str.host +
        "<br>path url: " +
        str.pathname +
        "<br>Search url: " +
        str.search +
        "<br>href url: " +
        str.href +
        "<br>Year : " +
        str.query.year +
        "<br>Month : " +
        str.query.month +
        "</br>"
    );
    res.write("</center>");
    res.end();
  })
  .listen(port, () => {
    console.log("listening on port : " + port);
  });
