var fs = require('fs');
var parse5 = require('parse5');

module.exports = {
  readHTML:
  function(user_name){
    var path = `../../front/${user_name}.html`;
    fs.readFile(path, 'utf8', function(err, description){
      return description;
    });
  },
  HTML:
    function (html, fileNames) {
      const document = parse5.parse(`<!DOCTYPE html>
      <html>
        <head>
        </head>
        <body>
          <p>p1</p>
          <p>p2</p>
        </body>
      </html>`);
      var p3 = '<p>p3</p>'
      var frag = document.childNodes[1].childNodes[2].childNodes[1].childNodes[0].value;
      const new_doc = parse5.parseFragment(document.childNodes[1].childNodes[2].childNodes[1],p3)
      console.log(new_doc)
      //var files = this.FileList(fileNames);
      return `
      `;
    },
    FileList:
    function(fileNames){
      var list = ``;
      var i = 0;
      fileNames.forEach(fileName => {
      list = list + `<ul>${fileName}</ul>`
      });
    }
    
}