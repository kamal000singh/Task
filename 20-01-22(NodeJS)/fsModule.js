const http = require("http");
const fs = require("fs");

//Create Files and Update Files
//method appends specified content to a file. If the file does not exist, the file will be created
fs.appendFile("demo.txt", "Append data into file\n", (err) => {
  if (err) throw err;
  console.log("data added");
});
//method takes a "flag" as the second argument, if the flag is "w" for "writing",
//the specified file is opened for writing. If the file does not exist, an empty file is created
fs.open("demo1.txt", "w", (err) => {
  if (err) throw err;
  console.log("create file");
});
//method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created
fs.writeFile("demo.txt", "Overwrite existing data", (err) => {
  console.log("overwrite file");
});

//delete file

// fs.unlink("demo1.txt", (err) => {
//   console.log("delete file");
// });

// http
//   .createServer((req, res) => {
//     fs.readFile("demo.txt", (err, data) => {
//       res.writeHead(200, { "content-type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(3000, () => {
//     console.log("listening on port : 3000");
//   });
