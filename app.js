const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log("hey from root path!")
  res.json({message: 'Hello World!'})
})

app.get('/books', (req, res) => {
    res.json({message: 'Hello from the book path!'})
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})