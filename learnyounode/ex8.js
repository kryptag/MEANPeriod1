var bl = require('bl');
var http = require('http');
var adress = process.argv[2];

http.get(adress, function(response){
    response.pipe(bl(function (err, data){
        if(err) console.error(err)
        else{
            console.log(data.toString().length);
            console.log(data.toString());
        }
    }));
});
