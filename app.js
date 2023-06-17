const express=require("express")
const app=express()

app.get("/",(req,res)=>{
    res.send("Hello shihab")
})
app.listen(2000)