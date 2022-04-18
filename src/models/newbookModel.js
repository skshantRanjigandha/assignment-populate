//now lets create newbook with reference to publisher and author identity


const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({

 name: String,
 
 author:{ type: ObjectId,
    ref:"author1"},

    price: Number,
    ratings: Number,

    publisher:{ type: ObjectId,

        ref:"publisher1"},

        isHardCover:{type: Boolean,
        default: false}

 
},

{timestamps: true});




//now according to some conditions in books 



module.exports = mongoose.model('book1',bookSchema)   //we need controller for books