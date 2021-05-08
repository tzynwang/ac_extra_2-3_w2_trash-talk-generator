const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const generateTrashTalk = require('./public/javascripts/trash_talk_generator.js')

const expressHandlebars = require('express-handlebars')
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/generate', (req, res) => {
  const talk = generateTrashTalk(req.body.jobTitle)
  res.render('index', { talk })
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
