const express=require('express');
const router=require('./routes/api');
const BodyParser=require('body-parser');
const mongoose=require('mongoose')

const app=express();
//connect to mongdb
mongoose.connect('mongodb://localhost/blog')
mongoose.Promise=global.Promise;

//using bodyparser 1st middleware
app.use(BodyParser.json());

//using router 2nd middleware
app.use('/api',router);
//error handling
app.use((err,req,res,next)=>{
    res.status(422).send({error:err.message});
});
//listening for requests
app.listen(process.env.port||3000, ()=>{
    console.log('listening to port 3000')
});