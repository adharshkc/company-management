import app from "../src/frameworks/webserver/ExpressServer";
import "dotenv/config";
import { connectDatabase } from "./frameworks/database/postgresql";


connectDatabase()
app.listen(process.env.PORT, () => {
  console.log("server started on port: ", process.env.PORT);
});
