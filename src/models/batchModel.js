//in these assignment we need two schemas batch and developer

const mongoose = require('mongoose')

const batchSchema = new mongoose.Schema({

    name: String, 
    size: Number,
    program: { type: String, 
    
         enum: ["Backend","Frontend"]
             }
    
             //here we need enum type s

            },

{timestamps: true});                                         //so we need controller for these


module.exports = mongoose.model('batch',batchSchema)  