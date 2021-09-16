const express=require('express');
const socket=require('socket.io');
const PORT=process.env.PORT||8000;


const app=express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('main');
});

// app.use(require('./routes/auth'));


const server=app.listen(PORT,(err)=>{
    if(err)
    {
        console.log("Error in Starting the server");
    }
    else
    {
        console.log("Server Successfully Running");
    }

});


