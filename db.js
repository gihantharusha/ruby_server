const mongoose = require("mongoose")

const uri = "mongodb+srv://tharushagihan:gihan1122@cluster0.b10uqkl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connect = ()=>{
    mongoose.connect(uri)
    .then(()=>console.log("connect to db"))
    .catch(e=>console.log(e))
}

connect()