import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const uri = process.env.CONNECT_DB

export const connectDB = async () => {
    try {
        await mongoose.connect(uri)
        console.log('La base de datos se conecto exitosamente!')
    } catch (error) {
        console.error('Error: ' + error.message)
    }
}