const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send('<h1 style="text-align:center">Hello World!!</h1>');
})

const port = 3000;
app.listen(port,function(err){
    if(err){
        console.log("Error: ",err);
    } else console.log("Listening on localhost", port);
})