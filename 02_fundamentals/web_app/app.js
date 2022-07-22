const express = require('express');
const app = express();
// const fileSystem = require('file-system');
const nodefs = require('node:fs');
const bodyParser = require('body-parser');
const port = 3000;


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/'));

app.get('/',function(req,res){
    nodefs.readFile(__dirname + '/index.html', function(err,data){
        if(!err){
            res.write(data);
        }
        res.end();
    })
})

app.post('/status/new', function(req,res){
    let status = JSON.stringify({"name":req['body']['name'],"status":req['body']['status']});
    nodefs.writeFile(__dirname + '/status.json',status,function(err){
        if(err) console.log(err);
    })
})

app.get('/status',function(req,res){
    nodefs.readFile(__dirname+'/status.json',function(err,data){
        if(!err) {
            res.send(JSON.parse(data));
        } else console.log(err);
    })
})

app.listen(port,function(err){
    if(err) {
        console.log(err);
    } else console.log("Listening to localhost"+port)
})