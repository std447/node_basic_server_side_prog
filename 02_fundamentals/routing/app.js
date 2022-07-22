const express = require('express');
const app = express();
const port = 3000;

app.get('/',function(req,res){
    res.send("Routing in Express");
})

app.get('/users/:name',function(req,res){
    res.send(req['params']['name']);
})

app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return;
    } 
    console.log("Listening on localhost:"+port);
})