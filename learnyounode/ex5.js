var fs = require('fs');
var path = require('path');
var firstArg = process.argv[2];
var secondArg = process.argv[3];


fs.readdir(firstArg, function(err, list){
    if(err){
        console.error(err);
        return;
    }
   list.forEach(function(el){
        if(path.extname(el) === '.' + secondArg){
            console.log(el)

        }
    });

});