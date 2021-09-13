const express = require('express')
const app = express()
const port = 3000

app.get('/greeting/:name', (req, res)=>{
    console.log(req.params)
   
    res.send('Hello ' + req.params.name + ', It is so great to see you! How are you?')
})

app.get('/total/:tip/:tipPercentage', (req, res)=>{
    console.log(req.params)
    const tip = parseInt(req.params.tip)
    const tipPercentage = parseInt(req.params.tipPercentage)
    const quotient = (tip / tipPercentage).toString()
    res.send(quotient)
})






app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})