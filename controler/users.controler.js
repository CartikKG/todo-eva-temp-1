const express=require('express');
const Users= require('../Operations/Users.js')
const authorization  = require('../Middleware/authorization');
const route=express.Router();

route.get('/', async (req,res)=>{
   
    try {
        const data=await Users.getAllUser();
        return res.status(200).send(data);
    } catch (error) {
        return res.send({error});
        
    }
});
route.post('/register', async (req,res)=>{
    // console.log("ok")
   let body=req.body;
    try {
        const data=await Users.registeredNewUser(body);
        console.log(data)
        return res.send({data});
    } catch (error) {
        return res.send({error});
        
    }
});
route.delete('/:id',authorization, async (req,res)=>{
     let id=req.params.id;
     let userId=req.user._id;
    try {
        const data=await Users.deleteUserByID(id,userId);
        return res.status(200).send({data});
    } catch (error) {
        return res.send({error});
        
    }
});
route.patch('/:id',  async (req,res)=>{
     let id=req.params.id;
     let dataa=req.body;
     let userId=req.user._id;
    try {
        const data=await Users.patchUserByID(id,dataa,userId);
        return res.status(200).send({data});
    } catch (error) {
        return res.send(error.message);
        
    }
});
route.get('/:id', async (req,res)=>{
     let id=req.params.id;
    try {
        const data=await Users.getUserByID(id);
        return res.status(200).send({data});
    } catch (error) {
        return res.status(500).send({error});
        
    }
});
route.get('/login/loggedInUser',authorization, (req,res)=>{
  
    return res.send({
        data: req.user
    })
  
});

route.post('/login', async (req,res)=>{
     let bodys=req.body;
    try {
        const data=await Users.loginUser(bodys);
        console.log(data)
        return res.status(200).send({data});
    } catch (error) {
        return res.status(500).send({error});
        
    }
});



  module.exports=route;