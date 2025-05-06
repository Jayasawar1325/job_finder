import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { addJob, allJobs, removeJob } from "../controllers/job.controller.js";
const jobRouter = Router();
jobRouter.post('/add',upload.fields([{
    name:'companyLogo',
    maxCount:1
}]),addJob)
jobRouter.post('/remove',removeJob)
jobRouter.get('/list',allJobs)
export {jobRouter}