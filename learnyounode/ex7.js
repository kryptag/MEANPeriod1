var http = require('http');
var adress = process.argv[2];

http.get(adress, function(response){
    response.setEncoding("utf8");
    response.on("data", function(data){
        console.log(data);
    })
});

