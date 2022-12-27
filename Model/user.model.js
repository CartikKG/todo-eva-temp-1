const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        password:{
            type:String,
            select:false
        }
    },{
        versionKey:false,
        timestamps:true
    }
)
const Users = mongoose.model('users',userSchema);
module.exports=Users;