//ASSIGNMENT .
//WE NEED THREE SCHEMAS FOR THESE NEWAUTHOR NEWPUBLISHER AND NEWBOOKS So

// first author schema 


const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({

 author_Name: String,
 age: Number,
 address: String,
 rating: Number
},

{timestamps: true});


module.exports = mongoose.model('author1',authorSchema)  // now we need controller file for creating author