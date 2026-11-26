import express from "express";
import { authenticated } from "../middlewares/auth.middleware.js";
import { checkAuth } from "../controllers/auth.controller.js";

const routes = express.Router()

routes.get("/check",authenticated,checkAuth)
export default routes