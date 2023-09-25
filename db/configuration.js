const mongoose = require("mongoose")

const mongoConn = async() => {

    try{

        await mongoose.connect (process.env.MONGO_URI, {
        
    
        })
        console.log("conexion exitosa")
    }catch (e) {

    console.log("error de conexion", e)
    throw new Error("Error de conexion")
    }
}
module.exports = {mongoConn}
