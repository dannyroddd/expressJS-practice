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


const answer = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


app.get('/magic/:question', (req, res) =>{
function response(req) {
    const myAnswer = answer[Math.floor(Math.random() * answer.length)]
    return (req.params.question + ": " + myAnswer)
}
   res.send(`<html><body><h1>${response(req)}</h1></body></html>`)
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})