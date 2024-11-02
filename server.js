import express from "express"
import connectDB from "./config/db.js";
import bookRoutes from './routes/bookRoutes.js';


const app = express();
 const PORT = 7000;



 connectDB();

 
 app.get('/',(req,res)=>{
    res.send("hello world");
 });
  
 
 app.use('/api', bookRoutes); // Use book routes with prefix '/api'


  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });


  // to run the program  use  "node server.js" //

  // This flow is  - model → controller → router → server