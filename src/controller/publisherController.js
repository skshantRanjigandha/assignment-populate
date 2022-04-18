const newpublisherModel = require('../models/newpublisherModel')

const createnewPublisher = async function (req, res) {

    let data =req.body

    let savedData =await newpublisherModel.create(data)
res.send({msg: savedData})
}


module.exports.createnewPublisher = createnewPublisher


//now api in routes
