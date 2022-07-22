const http = require('node:http')
const fs = require('node:fs');

const port = 3000;


    try {
        let fileA = fs.readFileSync('./fileA.txt','utf8');
        fs.writeFileSync('./fileA.txt', fileA + "This is an update",'utf8');
    }catch (err){
        if(err){
            console.log("Some Error:",err);
        }
    }


