const express= require('express');
const app=express();
const cors= require('cors');
const port=5000;
const Users=require('./db/Users');
const connectMongo=require('./db/db')
const path = require('path');
connectMongo();


app.use(express.json());
app.use(cors());



// ----------------deployment------------
const __dirname1 = path.resolve();
if(process.env.NODE_ENV === 'prodeuction'){
    app.use(express.static(path.join(__dirname1,"/doctor_chat/build")));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
    })
}else{
    app.get('/',(req,res)=>{
        res.send('welcome');    
    })
}
// ---------------deployment-----------


app.use('/api',require("./routes/user"));
app.listen(port,(req,res)=>{
    console.log(`you are connected to ${port}`);
})