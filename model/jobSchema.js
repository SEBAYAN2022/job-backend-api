import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, "Please Provied job Title"],
        minLength:[3,"Job Title must contain 3 characters"],
        maxLength:[50,"Job Title max contain 50 characters"],
    },
    description:{
        type: String,
        required:[true, "Please Provied job discription"],
        minLength:[3,"Job discription must contain 3 characters"],
        maxLength:[350,"Job discription max contain 50 characters"],
    },
    category:{
        type: String,
        required: [true,"Job category is required"],
    },
    country:{
        type: String,
        required: [true,"Country is required"],
    },
    city:{
        type: String,
        required: [true,"Job City is required"],
    },
    location:{
        type: String,
        required: [true,"Job Location is required"],
        minLength: [10, "Job location must contain at least 50 characters"]
    },
    fixedSalary:{
        type: Number,
        minLength:[4, "Fixed Salary must contain at least 4 digits"],
        maxLength:[9, "Fixed Salary can't contain at least 9 digits"]
    },
    salaryFrom:{
        type: Number,
        minLength:[4,"Salary must contain at least 4 digits"],
        maxLength:[9, "Salary can't contain at least 9 digits"]
    },
    salaryTo:{
        type: Number,
        minLength:[4,"Salary must contain at least 4 digits"],
        maxLength:[9, "Salary can't contain at least 9 digits"]
    },
    expired:{
        type: Boolean,
        default: false,
    },
    postedBy:{
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required: true,
    },
})

export const Job = mongoose.model("Job", jobSchema)