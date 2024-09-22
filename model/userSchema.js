import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



const userSchema = new mongoose.Schema({
    name: {

        type: String,
        required: true,
        minLength: [3,"Name must comtain atleast 3 characters"],
        maxLength: [50,"Name must be less than 50 characters"],
        trim: true
    },
    email:{

        type: String,
        required: [true,"Please enter your email"],
        unique: true,
        validate: [validator.isEmail,"Please enter a valid email address"] // to check email is valid or not
    },
    phone: {
        type: Number,
        required: [true, "Please enter your Phone Number!"],
    },
    password:{
        type: String,
        required: [true,"Please enter your password"],
        minLength: [8,"Password must be atleast 8 characters"],
        maxLength: [32,"Password must be less than 32 characters"],
        select: false
    },
    role:{
        type: String,
        required:[true,"Please enter your required role"],
        enum:["Job Seeker", "Employer"]
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    encryption:{

    }
})

//hashing the password
userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
    next();
    
})


// comparing the password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

//generating jwt token
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };

export const User = mongoose.model("User",userSchema);

