const http = require("http");
const fs = require("fs");
const url = require("url");

let server = http.createServer((req, res) => {
  let myURL = req.url;
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (myURL == "/") {
    file = fs.readFileSync("./html/home.html");
    res.end(file.toString());
  } else if (myURL == "/fs" || myURL == "/url") {
    str = "./html" + myURL + ".html";
    file = fs.readFileSync(str);
    res.end(file.toString());
  } else {
    res.end("<h1><center>404 Page not found</center></h1>");
  }
});

server.listen(3000, () => {
  console.log("listening on port : 3000");
});
