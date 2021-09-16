const express=require('express');
const socket=require('socket.io');
const PORT=process.env.PORT||8000;


const app=express();

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "",
  apiSecret: ""
})



app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('main');
});


app.post('/',(req,res)=>{

    const from = "Vonage APIs";
    const to = req.body.number;
    const text = req.body.message;

    vonage.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } 
        else
         {

            if(responseData.messages[0]['status'] === "0") {
               res.status(200).json({message:"Message sent successfully."});
            } else {
                res.status(400).json({message : `Message failed with error: ${responseData.messages[0]['error-text']}`});
            }
        }
    });


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


