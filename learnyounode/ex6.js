var readNReturn = require('./module.js')
var dir = process.argv[2];
var extname = process.argv[3];


readNReturn(dir, extname, function(err, listf){
    if(err) console.error(err)

    else{
      listf.forEach(function(file){
          console.log(file);
      });

    }

})