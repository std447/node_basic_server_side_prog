const http = require('http');
const fs = require('node:fs');
const _fs = require('file-system');

const port = 3000;

http.createServer(function(request,response){
    // response.write(request['url']);
    try {
        let displayFile = _fs.readFileSync('./file'+request['url'] + '.txt', 'utf-8');
        response.write(displayFile);
    } catch (err){
        if (err){
            response.write("404 file not found")
            response.write(err);
        }
    }
   
    response.end();
}).listen(port,function(err){
   if(err){
    console.log("Error",err)
   } else console.log("Listening on localhost:",port)
});