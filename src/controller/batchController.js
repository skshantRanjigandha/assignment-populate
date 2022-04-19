const batchModel = require('../models/batchModel')

const createBatch = async function (req, res) {

    let data =req.body

    let savedData =await batchModel.create(data)
res.send({msg: savedData})
}


module.exports.createBatch = createBatch


//now we need api so lets create in route