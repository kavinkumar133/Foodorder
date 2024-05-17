require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const router=require("./Routes/user")
const mongoose=require("mongoose")



connection();

app.use(express.json());
app.use(cors());



const products = require('./Routes/ProductRoute');

app.use("/check",router)

app.use('/api',products);






const port = process.env.PORT || 8000;
app.listen(port, console.log(`Listening on port ${port}...`));