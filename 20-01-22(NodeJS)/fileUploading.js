const http = require("http");
let formidable = require("formidable");
const fs = require("fs");
const path = require("path");
// const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url == "/fileupload") {
    console.log(req);
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      console.log(files);
      // console.log(path.dirname(__filename));
      let oldpath = files.file.filepath;
      let newpath =
        path.dirname(__filename) +
        "/upload_folder/" +
        files.file.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write("File Uploaded");
        res.end();
      });
    });
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<form method='post' action='fileupload' enctype='multipart/form-data'>"
    );
    res.write(
      "<input type='text' name='fname' /> <input type='file' name='file' /> <input type='submit'>"
    );
    res.write("</form>");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`listening on port : ${port}`);
});
