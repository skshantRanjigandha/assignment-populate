const mid2= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
   
    console.log("Hi this is being used here")
    next()
}

const mid4= function ( req, res, next) {
   
    
    console.log(" this is also being used ")
    next()
}

const mid5= function ( req, res, next) {
   
    console.log("Hi I am a middleware named Mid5")
    next()
}

module.exports.mid5 = mid5
module.exports.mid2 = mid2
module.exports.mid3 = mid3
module.exports.mid4 = mid4

