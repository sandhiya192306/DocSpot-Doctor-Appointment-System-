const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 8000;
// const checkuser = require("./middleware");
const app=express();
app.use(cors())
app.use(express.json());
// app.use(checkuser);
const userApiRoute = require("./routes/userRoute")
app.use("/user",userApiRoute);


 mongoose
    .connect("mongodb://localhost:27017/sandy")
    .then(()=>{
       console.log("successfully connected to mangodb compass")
   })
   .catch((err)=>{
       console.error("error connecting to db",err)
      })



app.listen(PORT,()=>{
     console.log(`server is running on http:localhost: ${PORT}`)
})