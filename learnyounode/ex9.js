var bl = require('bl');
var http = require('http');
var results = [];
var count = 0;

function print(){
    for(var i = 0; i < 3; i++) console.log(results[i])
}
function getIt(index) {
    http.get(process.argv[2 + index], function (response, cabk) {
        response.pipe(bl(function (err, data) {
            if (err) return cabk(err)

            results[index] = data.toString();
            count++;

            if(count == 3) print()
        }))

    })
}

for(var i = 0; i < 3; i++) getIt(i)