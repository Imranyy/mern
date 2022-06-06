const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//schema
const BlogSchema=new Schema({
    title:{
        type:String,
        required:[true,'Blog title required!!']
    },
    snippet:{
        type:String,
        required:[true,'Blog snippet required!!']
    },
    content:{
        type:String,
        required:[true,'Blog Content required!!']
    },
    blogImage:{
        type:String,
        require:[true]
    }
},{timestamps:true});
//model
const Blog=mongoose.model('blog',BlogSchema);
 
module.exports=Blog;