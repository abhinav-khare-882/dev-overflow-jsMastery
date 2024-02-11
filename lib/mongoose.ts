import mongoose from 'mongoose'

let isConnected: boolean = false

export const connectToDatabase=async()=>{
    mongoose.set('strictQuery',false)

    if(!process.env.MONGODB_URL){
        return "provide mongo db url"
    }
    if(!isConnected){
        return "database already connected"
    }
    try {
       await mongoose.connect(process.env.MONGODB_URL,{
            dbName: 'devflow'
        })
        isConnected=true
    } catch (error) {
        console.log("MongoDB connection failed",error)
    }
}
