const express = require("express")
const app = express();

const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
  res.json({Message:"Hello From Backend"})
})

app.listen(port,()=>{
  console.log(`Example app listening at http://localhost:${port}`)
})