import express from 'express'
import getWeatherUpdates from "./weatherService.js";
const app=express()
const port=process.env.PORT || 3000
app.get('/weather',async(req,res)=>{
    if(req.query.address){
        const Data= await getWeatherUpdates(req.query.address)
        res.send(Data)
    }
    else{   
        res.send({Error:'Please provide an address!'})
    }



})

app.listen(port, ()=>{
    console.log('Server is up!')
})