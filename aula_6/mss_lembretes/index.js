const { default: axios } = require('axios')
const express = require('express')
const app = express()

//aplicando middleware
app.use((req, res, next) => {
    console.log("oi")
    next()
})
app.use(express.json())

const lembretes = {}
contador = 0

// GET
// exemplo.com.br/lembretes
app.get('/lembretes', (req, res) => {
    res.send(lembretes)
})


// POST
// exemplo.com.br/lembretes
app.post('/lembretes', async (req, res) => {
    contador++;
    const texto = req.body.texto
    //const {texto} = req.body
    lembretes[contador] = {contador, texto}
    await axios.post("http://localhost:10000/eventos", {
        tipo: "LembreteCriado",
        dados: {
            contador, texto
        }
    })
    res.status(201).send(lembretes[contador])
})

app.listen(4000, () => {
    console.log("Lembretes. Porta 4000.")
})