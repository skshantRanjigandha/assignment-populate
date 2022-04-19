const express = require( 'express')
const router = express.Router();
const  {route } = require( 'express/lib/application' );



const batchController = require('../controller/batchController')


const developerController = require('../controller/developerController')






router.post('/createbatch',batchController.createBatch)       //similarly for creating developer 




router.post('/createdeveloper',developerController.createDeveloper) 


router.get('/fetchDetails',developerController.fetchDetails)



// we need batch id so in compass

//now according to assignment we need get api from





module.exports = router;

//lets create our authors in postman via json format



//now lets create publisher schema