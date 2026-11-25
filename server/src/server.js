import { config } from "dotenv"
import app from "./app/app.js"
import { connectDB } from "./config/db.js"

const PORT = config.PORT || 3000
await connectDB()
app.listen(3000,"0.0.0.0",()=>{
    console.log(`Server running on ${PORT}`)
})