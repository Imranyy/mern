require('dotenv').config();
const express=require('express');
const router=require('./routes/api');
const BodyParser=require('body-parser');
const mongoose=require('mongoose')

const app=express();
//connect to mongdb
mongoose.connect(process.env.DATABASE,{ 
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((res)=>{
    //listening for requests
    const Port=process.env.PORT||3000;
    app.listen(Port, ()=>{
        console.log(`Server running at ${Port}`) 
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
app.get('/blog3',(req,res)=>{
    res.render('pages/blog3',{title:'Blog Details'})
});
app.get('/blog4',(req,res)=>{
    res.render('pages/blog4',{title:'Blog Details'})
});
app.get('/blog5',(req,res)=>{
    res.render('pages/blog5',{title:'Blog Details'})
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

