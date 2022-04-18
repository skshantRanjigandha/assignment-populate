const mongoose = require('mongoose')

const publisherSchema = new mongoose.Schema({

 name: String,
 
 headQuarter: String
 
},

{timestamps: true});


module.exports = mongoose.model('publisher1',publisherSchema)


//need controller for publisher schema