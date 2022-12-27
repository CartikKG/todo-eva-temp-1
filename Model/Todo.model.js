const mongoose = require('mongoose');

const TodoSchema= new mongoose.Schema(
    {
        title:{
            type:String,
            require:true
        },
        status:{
            type:String,
            require:true
        },
        tags:{
            type:String,
            require:true
        },
        body:{
            type:String,
            require:true
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'users',
            required:true
        }
    },{
        versionKey:false,
        timestamps:true
    }
)
const Todos=mongoose.model('Todos', TodoSchema);
module.exports=Todos