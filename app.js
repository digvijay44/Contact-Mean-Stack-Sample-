// importing modules
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

const app = express();

const route = require('./routes/route');

//port no
const portno = 3000;

mongoose.connect('mongodb://localhost:27017/contactlist');

mongoose.connection.on('connected', ()=>{
    console.log('Connected');
});

mongoose.connection.on('error', (err)=>{
    if (err)
    {
        console.log('Error');
    }
});

app.use(cors());

app.use(bodyparser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyparser.urlencoded({ extended: true}));
    
//adding middleware -cors
app.use('/api', route);

app.use(express.static(path.join(__dirname, 'public')));

// listening
app.get('/', (req, res)=>{
    res.send("foobar");
    console.log("homepage;");
});

app.listen(portno, ()=>{
    console.log("App listening at" + portno);
});