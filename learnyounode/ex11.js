var http = require('http');
var fs = require('fs');
var wFile = process.argv[3];
var server = http.createServer(function(req, res){
    // her sætter vi headeren og contenttypen dette kunne ændres til f.eks JSON eller XML
    res.writeHead(200, { 'content-type' : 'text/plain'})

    fs.createReadStream(wFile).pipe(res);


});

server.listen(process.argv[2]);