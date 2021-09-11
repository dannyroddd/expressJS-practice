const express = require('express')
const app = express()
const port = 3000

app.get('/greeting/:name', (req, res)=>{
    console.log(req.params)
   
    res.send('Hello ' + req.params.name + ', It is so great to see you! How are you?')
})







app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})