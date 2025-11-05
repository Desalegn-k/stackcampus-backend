
//  require("dotenv").config();
// const express=require('express');
// const app=express();
// const cors=require('cors')
// const port=5300;
// // dbconnection
// const dbconnection=require("./db/dbConfig")

// //  chack the server
// // app.get("/",(req,res)=>{
// //   res.send("welcome")
// // })


// // user route middleware file
// const userRoutes=require("./routes/userRoutes");
// // question route middleware file
//  const quesionRoute=require("./routes/questionRoute");

//  //  cors
// app.use(cors())

// //  authentication middleware file
//  const authMiddleware = require("./middleware/authmiddleware");


// // json data middleware


// app.use(express.json());
// // user route middleware
// app.use("/api/users",userRoutes)

// // question routes middle ware
// app.use("/api/questions", authMiddleware, quesionRoute);

 

// // Answer routes
// app.use("/api/answers", authMiddleware, answerRoutes);


// //  answer routes middle ware
// // here




// async function start(){
//   try {const reult=await dbconnection.execute("select 'tes'");
//     // console.log(reult[0])
//     app.listen(port);
//     console.log('database connection established');
//     console.log(`the server listning on port ${port }`)
//     // console.log(reult[0])
  
// } catch (error) {
//   console.log(error.message)
  
// }

// }
// start()



require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
// const port = 5300;

// DB
const dbconnection = require("./db/dbConfig");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes"); // Users stay unchanged
const questionRoutes = require("./routes/questionRoutes"); // Questions
const answerRoutes = require("./routes/answerRoutes"); // Answers

app.use("/api/users", userRoutes);
app.use("/api/questionss", questionRoutes);
app.use("/api/answers", answerRoutes);

// Health check
// app.get("/", (req, res) => res.send("Welcome to EvanForum API!"));

// Start server
async function start() {
  try {
    await dbconnection.execute("SELECT 'test'");
    app.listen(process.env.PORT,'0,0,0,0', () => {
      console.log(`Server running on port ${process.env.PORT}`);
      console.log("Database connection established ");
    });
  } catch (error) {
    console.log("DB Connection Error:", error.message);
  }
}

start();

 
