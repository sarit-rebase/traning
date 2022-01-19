const express = require('express')
const Version = require('./versionControl')

const app = express();

app.get("/", (req : any , res: any)=>{
    res.send("Hello World!")
})

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`server running at ${port}`);
})
