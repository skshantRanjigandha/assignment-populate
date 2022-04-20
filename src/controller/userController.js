const basicCode = async (req, res, next) => {
   
    console.log('hey man congrats you have reached the handler')

    res.send({msg:'this is coming from controller handler '})
}

module.exports.basicCode = basicCode


const  middleWa = async (req, res, next) => {

    let date = new Date()
    console.log('current date is ' + date);

    res.send({msg:'this is coming from second controller handler '})
}

module.exports.middleWa = middleWa   // import these in route like