import express from 'express'
import doetenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { authRouter } from './routes/auth.route.js'
import { jobRouter } from './routes/job.route.js'
doetenv.config({
    path:'./.env'
})
const app = express();
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({
    extended:true
}))
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',jobRouter)
export {app}
