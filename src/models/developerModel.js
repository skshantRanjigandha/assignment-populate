//now lets create newbook with reference to publisher and author identity


const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId   //here we need objectid of batch so

const developerSchema = new mongoose.Schema({

 name: String,
 
 gender:{ type: String,
    enum:["male","female","other"]
},
   percentage: Number,
    batch:{ type: ObjectId,
    ref: "batch"}

 
},

{timestamps: true});                                  // we need controller




//now according to some conditions in books 



module.exports = mongoose.model('developer',developerSchema)   //we need controller for books