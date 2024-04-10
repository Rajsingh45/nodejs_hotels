const express= require('express')
const app= express();

app.get('/',function(req,res){
    res.send("Welcome to my hotel , How can i Help You?")
})

app.get('/chicken',function (req,res){
    res.send("Sure , I would love to serve chicken")
})


app.get('/idli',function (req,res){
    var customized_idle = {
        name :"rava_Idle",
        size : "10 cm diameter",
        is_sambhar : true
    }
    res.send(customized_idle)
})

app.post('/person', (req,res)=>{
    console.log("data saved")
    res.send('Data is Saved')  //postman 
})

app.listen(2000,()=>{
    console.log("Listening on port 3000")
})