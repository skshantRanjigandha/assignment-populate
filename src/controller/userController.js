
const UserModel = require('../models/userModel.js')

const createUser = async function (req, res) {

    let data = req.body
    let savedData = await UserModel.create(data)

    res.send( { msg: savedData} )
}


const getUsersData = async function (req, res) {


    let savedData = await UserModel.find()

    res.send( { msg: allUsers } )
}


module.exports.createUser = createUser

module.exports.getUsersData = getUsersData
