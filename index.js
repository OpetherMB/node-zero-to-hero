const express = require('express')
const nunjucks = require('nunjucks')
const session = require('express-session')

const port = 3000
const dirView = __dirname + '/data/view' // Path to view directory

const app = express()

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

//// Setup view
// Setup nunjucks loader. See https://mozilla.github.io/nunjucks/api.html#loader
let loaderFsNunjucks = new nunjucks.FileSystemLoader(dirView, {
    "watch": true,
    "noCache": true
})

// Setup nunjucks environment. See https://mozilla.github.io/nunjucks/api.html#environment
let nunjucksEnv = new nunjucks.Environment(loaderFsNunjucks)
nunjucksEnv.express(app) // Hook up express and nunjucks

app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/secured', (req, res) => {
    if (!req.session.login) {
        return res.redirect('/login')
    }
    res.render('secured.html')
})

app.get('/login', (req, res) => {
    res.render('login.html')
})

app.listen(port, () => console.log(`App running on http://localhost:${port}`))