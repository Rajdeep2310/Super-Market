const express = require("express")//Importing packages and functions...
const colors = require("colors");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors")
const productRouter = require("./Routes/productRoutes");
const Port = 5000 ;

// configuring dotenv files
dotenv.config();

// Some Middlewares...
app.use(cors());
app.use(express.json());

// Database Connection ....
require("./Config/DB");

//Listening Port...
app.listen(Port,()=>{
  console.log(`Server is running on PORT:${Port}...`.italic.bgBlue)
})
// Application Routes ...
app.get("/health",(req,res)=>{
  res.status(200).json({"message":"Server is Running...."})
})
// app.use("/*",(req,res) =>{
//   res.status(400).json({Message:"No Such route is present..."})
// })

//Product Request:-
app.use("/api",productRouter)

