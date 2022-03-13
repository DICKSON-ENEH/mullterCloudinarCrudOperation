const mongoose = require ('mongoose')

const carsSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    prefix:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    images :{
      type:String
    },
    cloud_url:{
        type:String,
    },
    cloud_id:{
        type:String,
    }

})

const samples = mongoose.model('cars', carsSchema)

module.exports= samples
