const mongoose = require('mongoose')
const URL='mongodb+srv://root:root@cluster0.mkvzap3.mongodb.net/shey-resume'
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

const connection=mongoose.connection
connection.on('connected',()=>{
    console.log("mongo db connection success")
})
connection.on('error',(error)=>{
    console.log(error)
})