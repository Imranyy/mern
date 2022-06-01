const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//schema
const BlogSchema=new Schema({
    title:{
        type:String,
        required:[true,'Blog title required!!']
    },
    content:{
        type:String,
        required:[true,'Blog Content required!!']
    }
});
//model
const Blog=mongoose.model('blog',BlogSchema);
 
module.exports=Blog;