const http = require("http");
const port = process.env.PORT || 3000;
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "text/html" });
    res.write("<center>");
    res.write("<h1>Welcome to Node.JS</h1>");
    res.write("Hello Kamal Singh");
    res.write(req.url);
    res.write("</center>");
    res.end();
  })
  .listen(port, () => {
    console.log("listening on port : " + port);
  });
