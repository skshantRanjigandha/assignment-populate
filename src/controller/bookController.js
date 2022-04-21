/*
const newbookModel = require('../models/newbookModel.js')
const newpublisherModel = require('../models/userModel.js')
const newauthorModel = require('../models/newauthorModel')


const createnewBooks = async function (req, res) { 

    let data =req.body
    let author1Id = data.author1
    let publisher1Id = data.publisher1
      
   //3a 
     if (author1Id){
      return  res.send({ message: "author id must be present in book details"})
    }
    
  
  
//3b
       let author1 =await newauthorModel.findById(author1Id)

       if (!author1){
      
        return res.send({ message: " not a valid author id  "})

 }

//3c
    if(!publisher1Id){

        return res.send({message: "publisher id is not present in book details"})
    }
    

   //3.d

    let publisher1 = await newpublisherModel.findById(publisher1Id)


    if (!publisher1){

        return res.send({ message: "not a valid publisher id"})
    }


    let newbook = await newbookModel.create(data)
    
    res.send({msg: newbook})
    
    }
  





const fetchBooks = async function (req, res) {

    let books = await newbookModel.find().populate('author1 publisher1')

    res.send({msg: books})
}



const updateBooks = async function (req, res) {          //update hard cover to true for books

     let hardCoverPublisher = await newpublisherModel.find({name: {$in:['penguin','harpercollins']}}).select({_id:1})

     let arrayofPublishers = []
    // console.log('original arry',hardCoverPublisher)

     for(let i = 0; i < hardCoverPublisher.length; i++) {

       let objId = hardCoverPublisher[i]._id
       arrayofPublishers.push(objId)
     }
    
     let books = await newbookModel.updateMany({_id:{$in: arrayofPublisher}},{isHardCover:true})  //{new: true} for update new

     res.send({data: books})

    }




    module.exports.createnewBooks = createnewBooks

    module.exports.fetchBooks = fetchBooks

    module.exports.updateBooks = updateBooks

    */
