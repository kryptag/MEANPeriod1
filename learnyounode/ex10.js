var net = require('net');
var date = new Date();
var time = date.getHours() + ":" + date.getMinutes();
var server = net.createServer(function (socket){
    socket.write(date.toLocaleDateString() + " " + time + '\n');
    socket.end();

});
server.listen(process.argv[2]);