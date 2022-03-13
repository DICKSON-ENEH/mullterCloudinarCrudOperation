
const carsModel= require('../model/model.js')
const cloudinary  = require("../cloudinary/cloudinary")
const fs = require("fs")

const Creating = async (req,res)=>{
try{
   const result = await cloudinary.uploader.upload(req.file.path)
    const createall = await carsModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      images: req.file.path,
      cloud_url:result.secure_url,
      cloud_id:result.public_id,
      prefix: req.body.firstName.charAt(0).toUpperCase()+req.body.lastName.charAt(0).toUpperCase()

    })
    console.log(result)
    res.status(201).json({success:"successful" ,
       data:{createall 
    }})

}catch(error){
console.log(error.message)
}
}

const getAll = async(req,res)=>{
try{
    const all = await carsModel.find()
    res.status(200).json({success:"successful" ,
       data:{all 
    }})

}catch(error){
console.log(error.message)

}
}

const getbyId= async (req,res)=>{
try{
    const getId = await carsModel.findById(req.params.id)

  res.status(200).json({success:"successful" ,
       data:{getId 
       }
    })
}catch(error){
console.log(error.message)
}

}

const updateOne = async(req,res)=>{
   try{

   const result = await cloudinary.uploader.upload(req.file.path)
    
    const Updating= await carsModel.findByIdAndUpdate(req.params.id, ({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      images: req.file.path,
      cloud_url:result.secure_url,
      cloud_id:result.public_id,
      // prefix: req.body.firstName.charAt(0).toUpperCase()+req.body.lastName.charAt(0).toUpperCase()

    }), {new:true})
    res.status(200).json({success:"successful" ,
    data:{Updating
    }
 })

   }catch(error){
console.log(error.message)
   }
}


const deleteOne= async(req,res)=>{
try{
   const id = req.params.id  
   const carss = await carsModel.findById(id)
   await cloudinary.uploader.destroy(carss.cloud_id)
   await fs.unlinkSync(carss.images)
    const deleting =await carsModel.findByIdAndDelete(id)
    res.status(204).json({success:"successful" ,
    data:"deleted"
    
 })
}catch(error){
console.log(error)
}
}




module.exports= {
    Creating,
    getbyId,
    getAll,
    updateOne,
    deleteOne
}