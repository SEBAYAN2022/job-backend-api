import { catchAsyncError } from "../middlewares/cacheAsyncError.js"
import ErrorHandler from "./error.js"
import jwt from "jsonwebtoken"
import {User} from "../model/userSchema.js"

export const isAuthorized = catchAsyncError(async(req,res,next)=>{
    const {token} = req.cookies
    if(!token){
        return next(new ErrorHandler("Please login to access this resource, User not authorized",401))
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY) // stored the decoded Id
    req.user = await User.findById(decoded.id)
    next()
})
