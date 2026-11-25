import app from "./app/app.js"
import { config } from "./config/config.js"
import {job} from "./config/cron.js"
import { connectDB } from "./config/db.js"

const PORT = config.PORT || 3000
await connectDB()
app.listen(3000,"0.0.0.0",()=>{
    console.log(`Server running on ${PORT}`)
    if(config.NODE_ENV === "production"){
        job.start()
    }
})