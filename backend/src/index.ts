import "module-alias/register";
import app from "@frameworks/webserver/ExpressServer";
import "dotenv/config";
import { connectDatabase } from "@infrastructure/database/postgresql";

import userRouter from "@frameworks/routes/userRoutes"
import hrRouter from "@frameworks/routes/hrRoute"
import employeeRouter from "@frameworks/routes/employeeRoute"
import ErrorHandler from "@frameworks/middlewares/errors/ErrorHandler";
import GlobalErrorHandler from "@frameworks/middlewares/errors/GlobalErrorHandler";
import cors from 'cors'
import morganMiddleware from "@frameworks/middlewares/logging/logger";
import { initializeRedisConnection } from "@infrastructure/database/redis";
import cookieParser from "cookie-parser"
import adminRouter from "@frameworks/routes/adminRoute";
import projectRouter from "@frameworks/routes/projectRoute";

app.use(cookieParser())
const corsOptions = {
  origin:process.env.CORS_ORIGIN||'http://localhost:5173/',
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials:true,
  optionSuccessStatus:200
}
app.use(cors(corsOptions))
app.use(morganMiddleware)
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/common", userRouter)
app.use("/api/v1/projects",projectRouter)
app.use("/api/v1/hr", hrRouter)
app.use("/api/v1/", employeeRouter)
app.use

app.use(ErrorHandler);
app.use(GlobalErrorHandler);

connectDatabase();
initializeRedisConnection().then(()=>console.log('redis connected'))
app.listen(process.env.PORT, () => {
  console.log("server started on port:", process.env.PORT);
});
