const passport = require('passport');
const LocalStrategy =require('passport-local').Strategy;

const Person = require('./8models/Person'); // Assuming Person model is in the same directory


passport.use(new LocalStrategy(async(USERNAME,password,done)=>{

    try{
      //console.log("Received credentials:",USERNAME,password);
      const user= await Person.findOne({username:USERNAME});
      if(!user){
        return done(null,false,{message:'INCORRECT USERNAME'});
      }
  
    //   const ispasswordMatch= user.password==password? true : false;
      const ispasswordMatch= await user.comparePassword(password);

      if(ispasswordMatch){
        return done(null,user);
      }else{
        return done(null,false,{message:'INCORRECT PASSWORD'});
      }
  
    }catch(err){
        return done(err);
    }
  }));

  module.exports= passport

  