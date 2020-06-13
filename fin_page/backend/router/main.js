var multer = require('multer');
var storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, `uploads/${file.fieldname}/`) // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
   },
   filename: function (req, file, cb) {
      cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
   }
})
var uploads = multer({ storage: storage })

var fs = require('fs');

module.exports = function (app) {
   app.get('/', function (req, res) {
      res.render('index')
   });
   app.get('/user', function (req, res) {
      var user_name = req.query.id;
      var dir_path = `./uploads/${user_name}/`;
      fs.readdir(dir_path, (err, files) => {
         res.render(`${user_name}`, {
            files: files,
            length: files.length
         });
      });
   });
   app.post('/uploads', uploads.single('jungseok'), function (req, res) {
      console.log(req.file);
      var user_name = req.file.fieldname;
      var dir_path = `./uploads/${user_name}`;
      fs.readdir(dir_path, (err, files) => {
         res.render(`${user_name}`, {
            files: files,
            length: files.length
         });
      });
   });
}