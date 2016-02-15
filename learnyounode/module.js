var fs = require('fs');
var path = require('path');
module.exports = function (dir, ext, callbk){
    fs.readdir(dir, function(err, data){

        if(err) return callbk(err);

        else{
            var finList = [];
          data.forEach(function(file){
              if(path.extname(file) === '.' + ext) {
                  finList.push(file);
              }
          })
          return callbk(null, finList);
        }
    });

}

//fs.readdir(dir, extarg, readNReturn(err, data){
//   if(err) {
//        console.error(err);
//        return readNReturn(err);
//    }
//    data.forEach(function(file){
//        if(path.extname === '.' + extarg) {
//            return file;
//        }
//    });
//});

