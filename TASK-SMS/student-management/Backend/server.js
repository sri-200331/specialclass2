const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv')

dotenv.config()

const connectDB=require('./config/db')
const studentRoutes=require('./routes/StudentRoutes')

connectDB()


const app=express()


app.use(cors())
app.use(express.json())

app.use('/students',studentRoutes)


 
const PORT=process.env.PORT || 5000

app.listen(PORT,()=>console.log('server is running'))