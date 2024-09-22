import express from "express"
import {getAllJobs, getMyJobs,getSingleJob, postJob,updateJob,deleteJob} from "../controllers/jobController.js"
import { isAuthorized } from "../middlewares/auth.js"

const router = express.Router()

router.get("/getall", getAllJobs)
router.post("/post",isAuthorized,postJob)
router.get("/getmyjobs",isAuthorized,getMyJobs)
router.get("/:id", isAuthorized, getSingleJob);
router.put("/update/:id",isAuthorized,updateJob)
router.delete("/delete/:id",isAuthorized,deleteJob)

export default router;

