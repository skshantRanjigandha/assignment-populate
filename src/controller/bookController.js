const newbookModel = require('../models/newbookModel')

const createnewBooks =async function (req, res) {

let data = req.body
let author1Id = data.author1Id
let publisher1Id = data.publisher1


//1st case where
if (author1Id){

    return  res.send({message:"author_id must be present in details of book"})
}

//2nd case

let author1 = await newpublisherModel.findById(author1Id)
if(!author1){

return res.send({message: "not a valid authorid"})

}


//3rd case

if(!publisher1Id){

    return res.send({message:"publisher id is not present in book details"})
}

//4th case
let publisher = await newpublisherModel.findById(publisher1Id)

if(!publisher){

    res.send({message:" not a valid publisher id"})
}

let newbook = await newbookModel.create(data)
res.send({msg: newbook})

}

// we need to fetch the books and also update it with



const fetchBooks = async (req, res) => {

    let books = await newbookModel.find().populate('author')

    res.send({msg: books})
}


const updateBooks = async (req, res) => {

    let hardcoverPublisher = await newpublisherModel.find({name: {$in:['penguin','penguin mart']}}).select({_id:1})

    let arrayPublisher =[]

    for(let i =0; i< hardcoverPublisher.length; i++) {

        let objId = hardcoverPublisher[i]._id
        arrayPublisher.push(objId)
    }

    let books = await newbookModel.updatMany({_id:{$in:arrayPublisher}},  {isHardCover:true})

    res.send({data: books})
}                                         //now in route get api




module.exports.createnewBooks = createnewBooks

module.exports.fetchBooks = fetchBooks  

module.exports.updateBooks = updateBooks

//for this we net get api


//similarly for update the bookschema3





//now api for newbooks in route