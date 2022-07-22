const http = require('node:http');
const fs = require('node:fs');
// const _fs = require('file-system');

const port = 3000;

http.createServer(function(req,res){
   try {
      let file = fs.readFileSync('.' + req['url']+'.txt', 'utf8')
   res.write(file);
   } catch (err){
      if(err){
         res.write("404 File not found")
      }
   }
   
    res.end();
}).listen(port,function(err){
   if(err){
    console.log("Error",err)
   } else console.log("Listening on localhost:",port)
});