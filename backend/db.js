const mongoose = require("mongoose")

mongoose.connect(process.env.DB_URI)
.then(()=>{
    console.log("database connect successfully");
})
.catch((err)=>{
    console.log(err);
})