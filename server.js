const express = require('express');

// Create an Express application
const app = express();
const dbConnect=require('./dbConnect');
app.use(express.json())
const port = process.env.PORT ||5000;
const userRoute=require('./routes/userRoute')
const path=require('path')

app.use('/api/user/',userRoute)

if(process.env.NODE_env==='production'){
  app.use('/',express.static('test/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'test/build/index.html'));
  })
}
app.get('/', (req, res) => {
    res.send('Hello, Express!');
  });
  
  // Start the Express server
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
//mongodb+srv://poornasrip2003:<password>@cluster0.mkvzap3.mongodb.net/