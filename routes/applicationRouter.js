import express from "express"
import {employergetAllApplications,
    jobseekerDeleteApplication,
    jobseekergetAllApplications,postApplication} from "../controllers/applicationController.js"
import {isAuthorized} from "../middlewares/auth.js"
const router = express.Router()

router.post("/post",isAuthorized,postApplication);
router.get("/employer/getall",isAuthorized,employergetAllApplications)
router.get("/jobseeker/getall",isAuthorized,jobseekergetAllApplications)
router.delete("/delete/:id", isAuthorized,jobseekerDeleteApplication)
export default router;

 