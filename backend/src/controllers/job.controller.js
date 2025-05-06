import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Job } from "../models/job.model.js";
import { uploadOnCloudinay } from "../utils/cloudinary.js";
export const addJob = asyncHandler(async(req,res)=>{
        const {category,companyName,location,daysLeft,jobType } = req.body;
        const logoLocalPath = await req.files?.companyLogo[0]?.path;
        if (!logoLocalPath) {
            throw new ApiError(400, "Logo file is required")
        }
        const companyLogo = await uploadOnCloudinay(logoLocalPath)
        const jobsData = await Job.create({
            category,
            companyName,
            companyLogo:companyLogo,
            location,
            daysLeft,
            jobType
        })
        return res.status(201).json({
            success: true,
            message: 'Product added successfully',
            jobsData
          }); 
})
export const removeJob = asyncHandler(async(req,res)=>{
    await Job.findByIdAndDelete(req.body._id || req.params._id)
    return res.status(200)
.json({
    success:true,
    message:'Job removed successfully'
})
})
export const allJobs = asyncHandler(async(req,res)=>{
    const jobs = await Job.find({})
    return res.status(200)
.json({
    message:'Jobs fetched successfully',
    success:true,
    jobs:jobs
})
})
