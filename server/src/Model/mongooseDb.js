import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

mongoose.connect('mongodb+srv://Dhinesh:Dhinesh123456789@cluster0.cyyge.mongodb.net/').then(()=>{
    console.log('MongoDB is connected'.bgRed)
}).catch((err)=> console.log(err))

export default mongoose