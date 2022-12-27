const express=require('express');
const app=express();
const connect=require('./db/db');
const userRoutes=require('./controler/users.controler');
const todoRoutes=require('./controler/todo.controler');
const PORT=process.env.PORT||3002;
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);
app.use('/todos', todoRoutes);
app.listen(PORT,async(req,res)=>{
    try {
        await connect();
        console.log(`Server Listening on port ${PORT}`);
    } catch (error) {
        console.log(error)
    }
})