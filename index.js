const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

const checaParametroIdadeMiddleware = (req, res, next) => {
  const { age } = req.query
  console.log(age)
  return !age ? res.redirect('/') : next()
}

app.set('view engine', 'njk')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  return res.render('index')
})

app.post('/check', (req, res) => {
  var age = req.body.age
  return idade >= 18
    ? res.redirect(`/major/?age=${age}`)
    : res.redirect(`/minor/?age=${age}`)
})

app.get('/major', checaParametroIdadeMiddleware, (req, res) => {
  const { age } = req.query
  return res.render('major', { age })
})

app.get('/minor', checaParametroIdadeMiddleware, (req, res) => {
  const { age } = req.query
  return res.render('minor', { age })
})

app.listen(3000)
