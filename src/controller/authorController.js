const newauthorModel = require('../models/newauthorModel')

const createnewAuthor = async function (req, res) {

    let data =req.body

    let savedData =await newauthorModel.create(data)
res.send({msg: savedData})
}


module.exports.createnewAuthor = createnewAuthor


//now we need api so lets create in route