import app from "./app.js"
import cloudinary from "cloudinary"
cloudinary.v2.config({
    cloud_name: process.env.CLOUDIANRY_CLIENT_NAME,
    api_key: process.env.CLOUDIANRY_CLIENT_API,
    api_secret: process.env.CLOUDIANRY_CLIENT_SECRET,
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})