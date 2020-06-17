var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `uploads/${file.fieldname}/`); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // cb 콜백함수를 통해 전송된 파일 이름 설정
  },
});
var uploads = multer({ storage: storage });

var fs = require("fs");
var path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index");
  });
  app.get("/user", function (req, res) {
    var user_name = req.query.id;
    var dir_path = `./uploads/${user_name}/`;
    var description = [];
    var title = [];
    fs.readdir(dir_path, (err, files) => {
      files.forEach((file) => {
        var file_name = path.parse(file).name;
        var file_ext = path.parse(file).ext;
        if (file_ext === ".pdf") {
          title.push(file_name);
          description.push(
            fs.readFileSync(`${dir_path}${file_name}.txt`, "utf8")
          );
        }
      });
      res.render(`${user_name}`, {
        path: dir_path,
        description: description,
        title: title,
        length: title.length,
      });
    });
  });
  app.post("/uploads", uploads.single("jungseok"), 
  function (req, res) {
    var user_name = req.query.id;
    var dir_path = `./uploads/${user_name}/`;
    var description = [];
    var title = [];
    fs.readdir(dir_path, (err, files) => {
      files.forEach((file) => {
        var file_name = path.parse(file).name;
        var file_ext = path.parse(file).ext;
        if (file_ext === ".pdf") {
          title.push(file_name);
          description.push(
            fs.readFileSync(`${dir_path}${file_name}.txt`, "utf8")
          );
        }
      });
      res.render(`${user_name}`, {
        path: dir_path,
        description: description,
        title: title,
        length: title.length,
      });
    });
   });
}
