import path from 'path'
import app from '../src/frameworks/webserver/ExpressServer'
import "dotenv/config"


app.listen(process.env.PORT, ()=>{
    console.log("server started on port: ", process.env.PORT)
})