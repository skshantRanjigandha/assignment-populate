

const newpublisherModel = require('../models/newpublisherModel.js')


const createnewPublisher = async function (req, res) {
 let data =req.body
  let SavedData = await newpublisherModel.create(data)
  res.send({msg: SavedData})
    
    
  }

    module.exports.createnewPublisher = createnewPublisher
   