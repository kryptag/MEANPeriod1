var fs = require('fs');

fs.readFile(process.argv[2], function lineCount(err, buffercontent){
   console.log(buffercontent.toString().split('\n').length - 1);
});