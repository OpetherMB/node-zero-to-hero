const express = require('express')
const nunjucks = require('nunjucks')
const session = require('express-session')
const bodyParser = require('body-parser')

const port = 3000
const dirView = __dirname + '/data/view' // Path to view directory

const app = express()

// Parse http body
app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}))

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

app.post('/login', (req, res) => {
    let post = req.body

    if (post.email === 'developers@example.com' && post.password === 'password123') {
        req.session.login = true
        return res.redirect('/secured')
    } else {
        res.send('Invalid email or password.')
    }
})

app.get('/logout', (req, res) => {
    req.session.login = false
    res.redirect('/')
})

app.listen(port, () => console.log(`App running on http://localhost:${port}`))