import express from "express";
import cors from "cors"
import { clerkMiddleware } from '@clerk/express'
import { config } from "../config/config.js";

const app = express();

app.use(express.json());
app.use(clerkMiddleware())
app.use(cors({origin:config.FRONTEND_URL,credentials:true}))

export default app