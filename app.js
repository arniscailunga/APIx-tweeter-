const express = require('express')

const app= express()
const port= 3000

app.get('/', function(req, res) {
    res.send('hello again,express !')
})
app.get('/api/api/:id',function(req,res) {
    const id= req.params.id
    res.send(` vous avez demander le api n°${id}`)

    })


// weere
app.listen(port, () => console.log('Notre application node est demarrée: sur http:// localhost:${port}'))