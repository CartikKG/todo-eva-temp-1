const Post=require('../Model/Todo.model');

const getAllPost=()=>{
    return Post.find().populate('userId');
}
const getPostByID=(id)=>{
    return Post.findById(id).populate('userId');
}
const deletePostByID= async(id,userId)=>{

let post = await Post.findById(id).populate('userId');

if (!post) {
    return ('Post does not exist');
}

if (String(post.userId._id) !== String(userId)) {
    return ('User can\'t delete the post')
}

post = await Post.findByIdAndDelete(id)

return post;
}
const patchPostByID=async(id, patch, userId)=>{
    const user = await Post.findById(id).populate('userId');
    let post = await Post.findById(id).populate('userId');
    if (!post) {
        return ('Post does not exist');
    }

    if (String(post.userId._id) !== String(userId)) {
        return ('User can\'t edit the post')
    }

  
    return Post.findByIdAndUpdate(id,patch,{new:true}).populate('userId');

}

// title:{
//     type:String,
//     require:true
// },
// status:{
//     type:String,
//     require:true
// },
// tags:{
//     type:String,
//     require:true
// },
// body:{
//     type:String,
//     require:true
// },
// userId:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'users',
//     required:true
// }
const createNewPost=async(body,id)=>{
    let ansa= await Post.create({
    title:body.title,
    status:body.status,
    tags:body.tags,
    body:body.body,
    userId:id
   })


   return ansa;
}
module.exports={
    getAllPost,
    getPostByID,
    deletePostByID,
    patchPostByID,
    createNewPost
}

