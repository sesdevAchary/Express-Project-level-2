import express from "express"
const app = express();
 const PORT = 7000;

 app.get('/',(req,res)=>{
    res.send("hello world");
 });
  // Use book routes with prefix '/api'


  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });


  // to run the program use , node server.js//