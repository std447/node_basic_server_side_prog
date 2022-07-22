const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mustache = require('mustache-express');

const portNumber = 3000;

app.use('/',express.static(__dirname + '/public'));
app.engine('html',mustache());
app.set('view engine','html')
app.set('views',__dirname + '/views')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(portNumber,(err)=>{
    (err)? console.log("Error:",err) : console.log("Listening on localhost",portNumber);
})