import dotenv from "dotenv"
dotenv.config()

export const config = {
    MONGODB_URI : process.env.MONGODB_URI,
    FRONTEND_URL : process.env.FRONTEND_URL,
    PORT : process.env.PORT,
    // ACCESS_TOKEN_SECRET : process.env.ACCESS_SECRET,
    // REFRESH_TOKEN_SECRET : process.env.REFRESH_SECRET,
    CLERK_PUBLISHABLE_KEY : process.env.CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY : process.env.CLERK_SECRET_KEY,
    IMAGEKIT_PRIVATE_KEY : process.env.IMAGEKIT_PRIVATE_KEY
}