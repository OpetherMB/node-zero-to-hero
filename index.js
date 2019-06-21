const express = require('express')
const nunjucks = require('nunjucks')

const port = 3000
const dirView = __dirname + '/data/view' // Path to view directory

const app = express()

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
app.listen(port, () => console.log(`App running on http://localhost:${port}`))