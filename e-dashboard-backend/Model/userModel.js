const mongoose=require("mongoose");


const userSchema= new mongoose.Schema({
  

    name:{
        type:String,
        required:[true,"Please add the name"]
    },
    email:{
        type:String,
        required:[true,"Please add the email address"],
        unique:[true,"Email address already taken"]
    },
    password:{
        type:String,
        required:[true,"Please add the password"]
    },


},{
    timestamps:true,
}
);

module.exports=mongoose.model("users",userSchema)