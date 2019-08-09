var http 	= require('http');
var fs 		= require('fs');
var port 	= 1111;
var wf = "./data/example.json";

var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

var w = myArgs.indexOf("--watch");
var p = myArgs.indexOf("--port");
if(p >= 0) {
    newport = myArgs[p+1];
    var portNum = Math.floor(newport);
    if(!isNaN(portNum)) {
        port = portNum;
    }
}

http.createServer(function(request, response) {
 
    var url = request.url;
    if(url ==='/about') {
    	response.writeHead(200, {
        	'Content-Type': 'text/html',
    	});
    	response.write('<h1>ABOUT</h1>'); //write a response
    	response.end(); //end the response
    } else {
        if(w >= 0) {
            var newWF = myArgs[w+1];
            var n = newWF.includes(".json");
            if(n) {
                wf = newWF;
            } else {
                console.log("Using ./data/example.json to serve");
            }

            response.writeHead(200, {
                'Content-Type': 'text/json',
                'Access-Control-Allow-Origin': '*',
                'X-Powered-By':'nodejs'
            });

            fs.readFile(wf, function(err, content){
                if (err) {
                    console.log(err);
                } else {
                    response.write(content);
                    response.end();
                }
            });
        } else {
            response.writeHead(200, {
                'Content-Type': 'text/json',
                'Access-Control-Allow-Origin': '*',
                'X-Powered-By':'nodejs'
            });

            fs.readFile(wf, function(err, content){
                if (err) {
                    console.log(err);
                } else {
                    response.write(content);
                    response.end();
                }
            });
        }
    }

}).listen(port);

console.log("Listening on port " + port );
