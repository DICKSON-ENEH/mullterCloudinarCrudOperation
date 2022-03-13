const express = require ('express')
const port = 4777
const mongoose = require ('mongoose')
const myRoute= require('./route/route')

const app = express()
const url = "mongodb+srv://cars:0perandu5@cluster0.xd5wm.mongodb.net/myFirstDatabase"
mongoose.connect(url).then(()=>{
  console.log('connected')
}).catch(()=>{
    console.log('failed')
})
app.use(express.json())
app.use("/", express.static("./uploads"))
app.use("/api", myRoute)
app.listen(port,()=>{
    console.log('listening to port')
})