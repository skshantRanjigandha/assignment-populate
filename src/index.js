const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const route = require('./routes/route');

const  mongoose= require('mongoose')


mongoose.connect("mongodb+srv://sushantkb:TM8BFATdO1usEQ5Q@cluster0.ubaqb.mongodb.net/batchdevelop?retryWrites=true&w=majority",{useNewUrlParser: true})
.then(()=>
console.log("mongoDb is connected"))
.catch( err =>  console.log(err))

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));


// assignment we have to write a global middleware 
//and in this middleware we have to console.log(date-ip-route and time also so)  first we create in index.js  a global middleware

// assignment means every time we hit a api or hit other api

const hiT =(function  (req, res, next){

const date = new Date();
let ip =req.ip
let route =req.originalUrl

console.log("date is",date, "ip Address is ---->",ip , "------->", " calling route is------->", route)

//next is used here

next();
}
);


app.use (hiT)

//now lets create anothe controller and check it using another api hit













/*
const url = require('url');
const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
app.use((req, res, next) => {
    console.log(fullUrl)
  });
  */

app.use('/', route);
    
app.listen(process.env.PORT || 3000, function() {

    
console.log('Express app running on port ' + (process.env.PORT || 3000))
});
