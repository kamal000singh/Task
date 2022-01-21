const url = require("url");

let myUrl = new URL("http://localhost/");
// let str = url.parse(myUrl, true);
myUrl.pathname = "pathValue";
myUrl.search = "?name=kamal";
myUrl.hash = "#path";
myUrl.port = 3000;

console.log(myUrl.href);
console.log(myUrl);
