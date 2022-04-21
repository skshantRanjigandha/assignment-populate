/*
const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({


name : String,
author : {type: ObjectId,
ref:"author1"},

price : Number,
ratings: Number,
publisher: {type: ObjectId,
           ref:"publisher1"},


isHardware : {type: Boolean,
default: false
}

    }, { timestamps: true});


module.exports =mongoose.model('book1',bookSchema);

*/