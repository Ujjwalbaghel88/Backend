Require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/instagram', (req, res) => {
    res.send('Hello Instagram!')
})
app.get('/facebook', (req, res) => {
    res.send('Hello Facebook!')
})
app.get('/youtube', (req, res) => {

    res.send('hello youtube ')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})