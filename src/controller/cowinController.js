let axios = require('axios')

let getStates = async function(req, res){

   let options = { method:'get',
                   url:  'https://cdn-api.co-vin.in/api/v2/admin/location/states'

                     }
  let result = await axios(options)

   console.log(result)
   let data = result.data

   res.status(200).send({msg: data, status:true})

}

let getDistricts = async function(req, res){
 try{
    let id = req.params.state_id

    let options = { method:'get',
                    url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`

    }
    let result = await axios(options)
    console.log(result)
    let data = result.data
 
    res.status(200).send({msg: data})
 
 }
 catch (err) {

    console.log(err)
    res.status(500).send({msg: err.message})
 
}
}
 let getBypin = async function(req, res) {
 try {
    let pin = req.query.pincode

    let date =req.query.date
   
    console.log(`query params are: ${pin} ${date}`)
 
    var options = { 
                  method:'get',
                  url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findBypin?pincode=${pin}&date=${date}`

                }
            
            
let result = await axios(options)
   
    console.log( result.data)
   
    res.status(200).send({msg: result.data})
 
 }


 catch (err) {

    console.log(err)
    res.status(500).send({msg: err.message})
 
}
}




let getoTp = async function(req, res) {
    try {
       
     let baD =req.body
     console.log(`body is: ${baD}`)
       var options = { 
                     method:'post',
                     url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
                    data: baD
                   }          
               
   let result = await axios(options)
      
       console.log( result.data)
      
       res.status(200).send({msg: result.data})
    
    }
   
   
    catch (err) {
   
       console.log(err)
       res.status(500).send({msg: err.message})
    
   }
   }
module.exports.getStates = getStates

module.exports.getDistricts = getDistricts

module.exports.getBypin = getBypin

module.exports.getoTp = getoTp