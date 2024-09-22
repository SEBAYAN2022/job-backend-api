import mongoose from "mongoose";
import validator from "validator";

const applicationSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Please provide youre name!"],
        minLength:[3,"Name must contain 3 characters"],
        maxLength:[35,"Name max contain 35 characters"],

    },
    email:{
        type: String,
        required: [true,"Please enter your email"],
        validate: [validator.isEmail,"Please enter a valid email address"] // to check email is valid or not
    },
    coverLetter:{
        type:String,
        required:[true, "Please Provide your cover letter "],
    },
    phone:{
        type:Number,
        required:[true, "Please provide youre Phone Number"],
    },
    address:{
        type: String,
        required:[true,"Please provide your Address!"]
    },
    resume:{
        public_id:{
            type:String,
            reuired:true,
        },
        url:{
            type:String,
            reuired:true,
        }
    },
    applicantID:{
          user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required:true,
          },
          role:{
            type:String,
            enum:["Job Seeker"],
            reuired:true,
          }  
    },
    employerID:{
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required:true,
          },
          role:{
            type:String,
            enum:["Employer"],
            reuired:true,
          } 
    }
})

export const Application = mongoose.model("Application", applicationSchema)