const express=require('express');
const router=express.Router();
const Blog=require('../models/blog')
//get data from db
router.get('/blog',(req,res)=>{
   
});
//add data to db
router.post('/blog',(req,res,next)=>{
    Blog.create(req.body).then((blog)=>{
        res.send(blog)
    }).catch(next);
});
//update data on db
router.put('/blog/:id',(req,res)=>{
   Blog.findByIdAndUpdate({_id:req.params.id},req.body).then(
       Blog.findOne({_id:req.params.id},req.body).then((blog)=>{
           res.send(blog);
       })
    )
});
//delete data from db
router.delete('/blog/:id',(req,res)=>{
   Blog.findByIdAndRemove({_id:req.params.id}).then((blog)=>{
       res.send(blog);
   });
});



module.exports=router;