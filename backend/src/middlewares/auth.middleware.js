/* eslint-disable no-undef */
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import jwt from 'jsonwebtoken'
export const verifyJWT = async(req,res,next)=>{
    const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "")
    if(!token){
        throw new ApiError(401,'Unauthorized token')
    }
    try{
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decodedToken?._id).select('-password')
        if (!user) {
            throw new ApiError(401, "Invalid Access Token")
        }
        req.user = user;
        next()
    }
    // eslint-disable-next-line no-unused-vars
    catch (error) {
        console.error("JWT verification failed:", error.message);
        throw new ApiError(401, "Invalid access token")
    }
}
