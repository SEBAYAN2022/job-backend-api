import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRouter from "./routes/userRouter.js"
import jobRouter from "./routes/jobRouter.js"
import applicationRouter from "./routes/applicationRouter.js"

import {dbConnection} from './database/dbConnection.js'
import {errorMiddleware} from './middlewares/error.js'



const app = express();
dotenv.config({path:"./config/config.env"})
app.use(cors({
    origin : ["https://hireminds.netlify.app","http://localhost:5173"],
    methods: ["GET","POST", "PUT","DELETE"],
    credentials: true,
}))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : "/tmp/",
}))
app.get("/", (req,res)=>{
    res.send("Hello World")
})

app.use("/user", userRouter)
app.use("/job", jobRouter)
app.use("/application", applicationRouter)

dbConnection()

app.use(errorMiddleware)
export default app;