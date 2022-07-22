const http = require('http');
const port = 3000

http.createServer((req,res)=>{
}).listen(port,(err)=>{
    if(err)
    {console.log(err)} else{
        console.log("Listening on localhost:"+port);
    }
});
