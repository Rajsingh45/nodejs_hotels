const express = require('express')
const app = express();

const Person= require('./Person');

const bodyParser=require('body-parser');
app.use(bodyParser.json());  //req.body


app.get('/',function(req,res){
    res.send("Welcome to my hotel , How can i Help You?")
})

app.get('/person',async (req,res)=>{
    try{        
        const data= req.body;

        const newPerson= new Person(data);
        const response= await newPerson.save();
        console.log('data saved successfully');
        res.status(200).json(response);
        }
    catch(err){
        console.log(err)
        res.status(500).json({error:' Internal server error'})
    }
    }

)
// const menuroutes=require("./routes/menuroutes");
// app.use('/menu',menuroutes);

// const personroutes=require("./routes/personroutes");
// app.use('/person',personroutes);

// const PORT=process.env.PORT || 3000;

app.listen(5000,()=>{
    console.log("Listening on port 4000");
})