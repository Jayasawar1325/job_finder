/* eslint-disable no-undef */
import { app } from "./app.js";
import { connectDB } from "./utils/mongodb.js";
connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('App is listening on port : ',process.env.PORT)
    })
})
.catch((error)=>{
    console.log('Connection Error!!',error)
})