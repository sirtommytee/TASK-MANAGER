const express = require("express");
const app = express();
const PORT =2000;
const mongoose = require("mongoose");
require("dotenv").config();
const taskRouter = require("./Routes/taskRouter");
const routeNotFound = require("./middleware/404");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use("/tasks", taskRouter)
app.use(routeNotFound)
app.use(errorHandler);

mongoose.connect(process.env.mongo_URL).then(()=>{
    app.listen(PORT, () => {
        console.log("server and DB connected");
    });
})
.catch((err) => console.log(err));

//schema
//title - string,required,unique, minlength- 5
//description - string,required maxlentgh-20 characters
//completed - boolean, default value=false
//Timesstamp


