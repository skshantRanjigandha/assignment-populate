const express = require( 'express')
const router = express.Router();
const  {route } = require( 'express/lib/application' );



const authorController = require('../controller/authorController')
//require controller

const publisherController = require('../controller/publisherController')

const bookController = require('../controller/bookController')



router.post('/createnewAuthor',authorController.createnewAuthor)


router.post('/createnewPublisher',publisherController.createnewPublisher) // lets create new publisher


router.post('/createnewBooks',bookController.createnewBooks)

router.get('/fetchBooks',bookController.fetchBooks)

router.get('/updateBooks',bookController.updateBooks)

// in creating new books we use objectids of author and publisher





module.exports = router;

//lets create our authors in postman via json format



//now lets create publisher schema