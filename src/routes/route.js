const express = require('express');
const router = express.Router();

const userController = require('../controller/userController')




router.post('/userss',userController.createUser)



router.post('/login',userController.loginUser)  


router.get('/userss/:userId',userController.getUserdata)



module.exports = router;






//router.post('/createnewBooks',bookController.createnewBooks)  




//router.put('/updatebooks',bookController.updateBooks)






















































/*



//problem

//create the players array outside on the top  of the api so that data is maintained across api hits .



// assignment using lodash 


const lodash = require('lodash');

let months =['jan','feb','mar','april','may','june','july','aug','sep','oct','nov','dec']

let subArrays = lodash.chunk(months,6)

console.log('i am using chunk',subArrays)


// second assignment 0f lodash using tail method

let oddNumbers = [1,3,5,7,9,11,13,15,19]
console.log('i am using tail method',lodash.tail(oddNumbers))


//again using union method of lodash

let a = [1,2,3,4]
let b = [2,3,4,6]
let c = [1,4,2,7]
let d = [1,,6,8]
let e = [1,2,5,0,7]

console.log('i am using union method',lodash.union(a,b,c,d,e))

//problem using lodash of key value pairs 


let arrayOfKeyValuePairs = [ ["horror","The Shining"] ,["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]

console.log('now i am using union to find the key value pairs',lodash.fromPairs(arrayOfKeyValuePairs))







// get api that returns a list of candidates name







router.get('/test-api1', function (req, res) {

    res.send( {msg :"hi FunctionUp ", name : sushant , age: 28} )

    console.log('I am inside baby')
});



router.get('/test-me5', function (req, res) {
    console.log('I am another route baby')
    res.send('My fourth ever api!')
});





router.get('/test-api2', function (req, res) {

    res.send( { msg: "Hi FUnctionUp..again !"} )
});


router.get('/test-api3', function (req, res) {

    res.send( { msg: "Hi FUnctionUp..again..this is another similar api !"} )
});


router.get('/test-api4', function (req, res) {

    res.send( { msg: "Hi FUnctionUp..again..this is another similar api ..not I am getting bored!"} )
});


router.get('/test-api5', function (req, res) {

    res.send( { msg: "Hi FUnctionUp" , name:"FunctionUp", age: "100"} )
});



router.get('/test-api6', function (req, res) {

    res.send( {   data: [12, 24, 36, 48, 60]  }   )
});



// to send data in  post request-> prefer sending in BODY -> click body-raw-json
router.post('/test-post2', function (req, res) {
    let data= req.body
    console.log(data)
    res.send( {  msg: "hi guys..my 2nd post req"  }   )
});


const randomController= require("../controllers/randomController.js")
//write a post request to accept an element in post request body and add it to the given array and return the new array
router.post('/test-post3', randomController.addToArray ); //HANDLER/CONTROLLER

// assignment missing number
// api which gives missing number data

router.get('/missingNo' , function(req,res){

let array = [1,2,3,5,6,7]
let total =0;

for(var i in array){

total = total + array[i];
}


let lastDgt = array.pop()
let conSum =lastDgt * (lastDgt+1)/2
let missingNo =conSum - total;

res.send({data: missingNo});
});


// same for sum of n consecutive numbers

router.get('/missingnumber', function(req,res){

    let array = [33,34,35,37,38]
    let leng = array.length
    let total =0;
    
    for(var i in array){
    
    total = total + array[i];
    }
    
    let firstDgt = array[0]
    let lastDgt = array.pop()
    let conSum =(leng+1)* (firstDgt+lastDgt)/2
    let missingNo =conSum - total;
    
    res.send({data: missingNo});
    });
    //api that creates a new player that saves a player details and doesnot allow saving the data of
    //  a player with a name that exists the data



    router.post('/', function(req,res){


        let players = require ('../candidates/players.js');

        router.post('/players', players.player);

        let i =req.params.index


        for (let i =0 ;i=players.length ;i++){
        
        
            if(players.name[i]!== players.index){

                players.push(index)
            }

        }
        res.send({data:players , status :true})
    });




    //my first ever api 


    const loggermodule = require('../logger/logger.js')

    router.get('/test', function(req,res){

 loggermodule.welcomeMsg()

 res.send('my first ever api')

    });

    const helperModule = require('../helper/helper')

    
   


*/







