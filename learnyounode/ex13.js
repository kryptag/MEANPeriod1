var http = require('http');
var url = require('url');
function formatTime(date){
    return {
        hour : date.getHours(),
        minute : date.getMinutes(),
        second : date.getSeconds()
    };
}

function formatUnix(date){
    return{
        unixtime : date.getTime()
    };
}

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'application/json'})

    if(req.method != 'GET') return res.end("Not a GET METHOD")

    var reqUrl = url.parse(req.url, true)
    var date = new Date(reqUrl.query.iso)

    if(reqUrl.pathname == '/api/parsetime') res.end(JSON.stringify(formatTime(date)))
    if(reqUrl.pathname == '/api/unixtime') res.end(JSON.stringify(formatUnix(date)))

});

server.listen(process.argv[2]);
