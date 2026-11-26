import express from "express";
import cors from "cors"
import { clerkMiddleware } from '@clerk/express'
import { config } from "../config/config.js";
import fs from "fs";
import path from "path"
import clerkWebhook from "../webhooks/clerk.webhook.js"
import AuthRoutes from "../routes/auth.route.js"

const app = express();

const publicDir = path.join(process.cwd(),"public")

app.use("/api/webhooks/clerk",express.raw({type:"application/json"}),clerkWebhook)
app.use(express.json());
app.use(clerkMiddleware())
app.use(cors({origin:config.FRONTEND_URL,credentials:true}))

app.get("/health",(req,res)=>{
    res.status(200).json({
        message : "Backend running",
        running:true
        
    })
})
app.use("/api/auth",AuthRoutes)

if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir));

  app.get("/{*any}", (req, res, next) => {
    res.sendFile(path.join(publicDir, "index.html"), (err) => {
      if (err) next(err);
    });
  });
}

export default app