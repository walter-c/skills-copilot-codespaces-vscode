// Create web server application

// Import modules
const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
const port = 3000

// Set up application
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Serve static files
app.use(express.static(path.join(__dirname, 'public')))

// Get comments
app.get('/comments', (req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      throw err
    }

    res.json(JSON.parse(data))
  })
})

// Post comments
app.post('/comments', (req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      throw err
    }

    const comments = JSON.parse(data)
    comments.push(req.body)

    fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
      if (err) {
        throw err
      }

      res.json(comments)
    })
  })
})

// Listen on port 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
}) 