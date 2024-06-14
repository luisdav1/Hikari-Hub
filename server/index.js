
import express from 'express';
import routeUser from './routes/usuarios.js';
import routeManga from './routes/manga.js'
import { connectDB } from './database/config.js';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT || 8080
const app = express();

//midlewers 
app.use(cors())
app.use(express.json())

await connectDB()

app.use(routeUser,routeManga)

app.listen(PORT, () => {
    console.log('Server iniciado exitosamente!')
})