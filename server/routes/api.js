const express=require('express');
const router=express.Router();
const Blog=require('../models/blog');

//get data from db
router.get('/blog',(req,res)=>{
   Blog.find({}).sort({createdAt:-1}).then((blog)=>{
    res.render('../views/pages/index',{title:'Blogs',Blogs:blog})
   });
});
//get data for autheniticated users 
/*router.get('/blogs',(req,res)=>{  
   Blog.find({}).sort({createdAt:-1}).limit(5).then((blog)=>{
    res.send(blog)
   });
});*/

//add data to db
router.post('/blog',(req,res,next)=>{
   Blog.create(req.body).then((blog)=>{
     res.send(blog)
    }).catch(next);
});
 
//get blogdetails
router.get('/blog/:id',(req,res)=>{
    Blog.findById({_id:req.params.id}).then(blog=>{
    res.render('../views/pages/blogDetails',{title:'Blog Details',blog})
    }) 
});

//delete data from db
router.delete('/blog/:id',(req,res)=>{
   Blog.findByIdAndRemove({_id:req.params.id}).then((blog)=>{
      res.send(blog)
   });
});



module.exports=router;