const express=require('express');
const router=require('./routes/api');
const BodyParser=require('body-parser');
const mongoose=require('mongoose')

const app=express();
//connect to mongdb
mongoose.connect('mongodb://localhost/blog').then((res)=>{
    //listening for requests
    app.listen(process.env.port||3000, ()=>{
        console.log('listening to port 3000')
    });
});
mongoose.Promise=global.Promise;

//view engine set  
app.set('view engine', 'ejs');

//serving static 
app.use(express.static('client'));

//using bodyparser 1st middleware
app.use(BodyParser.json());
app.use(express.urlencoded({extended:true}));
//using router 2nd middleware
app.use(router);
//error handling 
app.use((err,req,res,next)=>{
    res.status(422).send({error:err.message});
});

//routes
app.get('/',(req,res)=>{
    res.redirect('/blog')
});
app.get('/create',(req,res)=>{
    res.render('pages/create',{title:'Add New Blog'})
});
app.get('/about',(req,res)=>{
    res.render('pages/about',{title:'About Us'})
});
app.use((req,res)=>{
    res.status(404).render('pages/404',{title:'Not Found'})
});

