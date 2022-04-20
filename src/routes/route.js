const express = require( 'express')
const router = express.Router();


const commonMiddlewares = require ('../middleware/commonMiddlewares')
const userController = require('../controller/userController') // <-----this
   


/*
const userModel = require('../models/userModel')

const basicCode = async function (req, res) {
console.log("reached the handler")
 res.send({msg: "controller coming from basic route"})
}
module.exports.basicCode = basicCode

*/


const mid1 = function (req, res,next) {

    console.log('hii i am a middleware name mid1')
//logic
   
let loggedIn = false
if (loggedIn==true) {

    console.log(' logged in is true now thik')
  next()   
}

else{

  
res.send("please register or login")
}
}

router.get('/basicroute',userController.basicCode) 

router.get('/basicroute2',userController.middleWa)
//lets create another api

router.get('/global',commonMiddlewares.mid3,commonMiddlewares.mid4,userController.basicCode)

//now we have to push in my repository

module.exports = router;

