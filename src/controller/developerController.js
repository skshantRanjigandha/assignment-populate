const developerModel = require('../models/developerModel')

const createDeveloper =async function (req, res) {

let data = req.body
let developer = await developerModel.create(data)
res.send({msg: developer})


}                                         //now in route post api




const fetchDetails = async function (req, res) {
    
    let scholarship = await developerModel.find().populate("batch",{percentage:{$gte:70} })
    res.send({msg: scholarship})
}




module.exports.createDeveloper = createDeveloper
module.exports.fetchDetails = fetchDetails

//now inroutes get api



