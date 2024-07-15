import 'module-alias/register'
import app from "@frameworks/webserver/ExpressServer";
import "dotenv/config";
import { connectDatabase } from "@infrastructure/database/postgresql";
import adminRouter from "@frameworks/routes/adminRoutes"

app.use('/admin', adminRouter)

connectDatabase()
app.listen(process.env.PORT, () => {
  console.log("server started on port: ", process.env.PORT);
});
