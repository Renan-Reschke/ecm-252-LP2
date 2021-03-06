const express = require ('express')
const axios = require ('axios')
const app = express()
app.use(express.json())

app.post('/eventos', (req, res) => {
    const evento = req.body

    axios.post('localhost:4000/eventos', evento)
    axios.post('localhost:5000/eventos', evento)
    res.status(200).json({msg: "OK"})
})

app.listen(10000, () => {
    console.log("barramento de eventos. Porta 10000.")
})