import "module-alias/register";
import app from "@frameworks/webserver/ExpressServer";
import "dotenv/config";
import { connectDatabase } from "@infrastructure/database/postgresql";
import adminRouter from "@frameworks/routes/adminRoutes";
import userRouter from "@frameworks/routes/userRoutes"
import ErrorHandler from "@frameworks/middlewares/errors/ErrorHandler";
import GlobalErrorHandler from "@frameworks/middlewares/errors/GlobalErrorHandler";
import cors from 'cors'


app.use(cors())
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/", userRouter)

app.use(ErrorHandler);
app.use(GlobalErrorHandler);

connectDatabase();
app.listen(process.env.PORT, () => {
  console.log("server started on port:", process.env.PORT);
});
