# Node Zero to Hero

Learn how to build a web app using Node.js

## Requirements

#### Pre-requisite Knowledge

* Familiarity with the web development stack: HTML, CSS, and JS
* Can run commands in the command line (bash, command prompt)
* Basic understanding of Git

#### Software
* OS (Operating System) - Windows 7 or later
* Node.js 8.x.x or later
* Visual Studio Code
* Git for Windows


## Let's Begin!


#### Setting Up our Work Directory
1. Start by creating a work directory of your choice. This tutorial used: `C:/dev/nodejs`
1. Open the `Command Prompt` inside your work directory.
1. Clone the tutorial repo: `git clone https://github.com/kosinix/node-zero-to-hero.git`
1. You should see a directory with just a directory named `data`, a `.gitignore` file and a `README.md` file.

1. Start `Visual Studio Code`
1. Open the directory `node-zero-to-hero`
1. Open the VS Code terminal in `Terminal > New Terminal`. Or use the shortcut `CTRL + (backtick)`

*As the name implies, a `.gitignore` file tells Git to ignore certain files and directories. Go ahead and inspect its contents.*
#### Initializing Our Code
1. In the VS Code terminal run: `npm init`

1. Enter the following details:


        package name: node-zero-to-hero 

        version: 1.0.0

        description: 

        entry point: index.js

        test command: 
        
        repository: https://github.com/kosinix/node-zero-to-hero.git

        keywords: 

        author: 

        license: MIT
        
        Is this Ok?    Just hit enter

1. This will create a `package.json` file that contains info about this package.

*Note: You can open `package.json` and edit the details above manually.*


## Chapter 1 - Express JS
Express JS is a framework for creating web apps. We can write web apps without using Express but we would write a lot more code. 

*NPM - "npm" stands for Node Package Manager.*

1. Start by installing Express JS. 

1. We use the following command: `npm install express`

1. This does 3 things:

    1. Adds a `package-lock.json` file. This file is used by node to keep track of its dependencies.
    1. Create a `node_modules` directory. This is where packages are installed.
    1. Update `package.json` and add `express` under `dependencies`.

1. Open `node_modules`. Can you see the `express` package? There are other packages that were installed too.

*Package - A "package" is a piece of code that we can re-use. Express JS is just another package.*

*Dependencies - Are packages written by other people that our app "depends" on.*


##### Creating An Entry-Point to Our Code

1. Go to VS Code's Explorer panel. Make sure we are in the root of our work directory by clicking the `package.json` file. 

1. Click the New File icon. Type `index.js`

1. Open `index.js` by clicking on it in the Explorer panel.

1. Inside it, add the following code:

        const express = require('express')

        const port = 3000
        const app = express()
        app.listen(port, () => console.log(`App running on http://localhost:${port}`))

1. To run our app, type `node index.js`. 
1. You should see the message `App running on http://localhost:3000`

##### Whats Happening??
Let's dissect the code in `index.js`, one by one.

First we include the express package and assign it to a constant:

        const express = require('express')

Next we assign our port number to a constant. 

        const port = 3000

A port number can be any number from 1 to 65535. We are using 3000 since lower numbers are usually reserved by the operating system.

Next we create an instance of express and assign it to a constant named `app`:

        const app = express()

Finally this is where the magic happens:

        app.listen(port, () => console.log(`App running on http://localhost:${port}`))

We create a server that listens to our port. When you go to the address http://localhost:3000 in your browser, the operating system forwards you to our node.js app.

At minimum we can just use this code:

        app.listen(port)

But there wont be any log in the terminal that our server has started running. Go ahead and try it! That's where 

        () => console.log(`App running on http://localhost:${port}`)

comes in. Its a function that gets called when the server has started running.

That's it!

##### Adding routes
Our app is now running, but it doesn't have any routes. Its basically useless. Let's go ahead and add some routes.


1. Replace the code in `index.js` with the following:

        const express = require('express')

        const port = 3000
        const app = express()
        app.get('/', (req, res) => {
            res.send('Hello world!')
        })
        app.listen(port, () => console.log(`App running on http://localhost:${port}`))



1. Stop the previously running app by hitting `CTRL + C` in the terminal.
1. Run the app again by typing: `node index.js`.
1. Open Google Chrome or Firefox and go to `http://localhost:3000/`

1. You should be greeted with a message `Hello world!`.

## Congratulations you've just created a web app!

#### Save you work to git.

Create a new branch called develop. In the terminal `git checkout -b develop`

Stage your commit: `git stage .`

Commit: `git commit -m "Chapter 1"`


#### Checkpoints

If for some reason, you didnt get it right, you can check the correct code in the `checkpoints` branch. This one is on a commit named `Chapter 1`.

## Chapter 2 - Nunjucks
Nunjucks is a templating engine for JavaScript. A templating engine simplifies the management of your HTML files.

1. Start by installing Nunjucks

        npm install nunjucks

1. Go ahead and check your `package.json`. You now have `nunjucks` together with `express` under dependencies. That means that your app now depends on `express` and `nunjucks` to work properly.

1. Lets try displaying an actual web page instead of just hello world. Open our home page view file in `data > view > index.html`.

1. Inside it copy all its contents. `CTRL + A` + `CTRL + C`

1. Go back to `index.js` and replace the string `'Hello world!'` in `res.send('Hello world!')` with the contents of `index.html` wrap in backticks (`).

1. Your code should look like this:

        const express = require('express')

        const port = 3000
        const app = express()
        app.get('/', (req, res) => {
        res.send(`<!doctype html>
        <html lang="en">
        
        <head>
                <!-- Required meta tags -->
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        
                <!-- Bootstrap CSS -->
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        
                <title>Node Zero to Hero</title>
        </head>
        
        <body>
                <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <div class="container">
                        <a class="navbar-brand" href="/">
                        <svg style="width:32px;height:32px" viewBox="0 0 24 24"><path fill="#77C043" d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.88,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z" /></svg> 
                        <span style="color:#77C043; font-size: 17px">Node Zero to Hero</span>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
        
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                <a class="nav-link" href="/secured">Secured Page</a>
                                </li>
                        </ul>
                        </div>
                </div>
                </nav>
                <div class="container">
                <div class="row">
                        <div class="col-md-12 ml-auto mr-auto">
                        <h1>Home</h1>
                        <p>Welcome! Please login to view the protected page.</p>
                        </div>
                </div>
                </div>
        
                
        
                <!-- Optional JavaScript -->
                <!-- jQuery first, then Popper.js, then Bootstrap JS -->
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                crossorigin="anonymous"></script>
        </body>
        
        </html>`)
        })
        app.listen(port, () => console.log(`App running on http://localhost:${port}`))


1. Now try running your app: `node index.js` and refresh your browser.

Looks good ey!

There are problems however. 

With this technique, `index.js` could become a very large file when we add more and more pages for our app. Also what happens if we want to share the same HTML in the different pages?

This is where a template engine like Nunjucks comes in.


#### Setting up Nunjucks
Let's setup Nunjucks with Express.

1. Start by undoing your last change to `index.js` by running this in terminal: 

        git checkout -- index.js

1. Notice that `index.js` is now back to its "hello world" state. Lets update its content to:

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

1. Open Git Gui: `git gui`
1. Click `index.js`. See the green and red texts? Green denotes code that was added, red is code that was deleted.

1. Now run our app: `node index.js`

Voila it still looks the same in the frontend, but our template code is now managed by nunjucks!


#### How does it work?

First we include nunjucks

        const nunjucks = require('nunjucks')

Then we store the location of our `view` directory

        const dirView = __dirname + '/data/view' // Path to view directory

`__dirname` is a built-in node variable that points to the directory of the current file its in. In this case, the directory of where index.js is `C:/dev/nodejs/node-zero-to-hero`.

Next we setup Nunjucks' FileSystemLoader 

        let loaderFsNunjucks = new nunjucks.FileSystemLoader(dirView, {
                "watch": true,
                "noCache": true
        })

It tells the FileSystemLoader where our view directory is. `watch` means to watch for changes in the view directory.`noCache` tells it to recompile the template files when it changes. `noCache` is set to true during development and false during production.

These next two just assigns the the FileSystemLoader into Environment and hook it up with express:

        let nunjucksEnv = new nunjucks.Environment(loaderFsNunjucks)
        nunjucksEnv.express(app) // Hook up express and nunjucks

Lastly, we replase send with render inside the route:

        res.render('index.html')

How does render work magically? Remember that we hook up express and nunjucks above.

That's it.

## Congratulations you've just used a template engine!

#### Save you work to git.

Create a new branch called develop. In the terminal `git checkout develop`

Stage your commit: `git stage .`

Commit: `git commit -m "Chapter 2"`


#### Checkpoints

If for some reason, you didnt get it right, you can check the correct code in the `checkpoints` branch. This one is on a commit named `Chapter 2`.

## Chapter 3 - Sessions
By design, web apps doesn't have a way to remember you. It treats every visit to it as unique. In order to differentiate your request among others, we use sessions.

The most common use of session, is to identify if a user is logged-in or not.

A login is used to secure a portion of a web app. Meaning you can only view it if you are logged in.

#### Secured Page

1. In your web app, click "Secured Page" on the top right of the page. 

1. Did you get a `Cannot GET /secured` error? That is because the route for our secure page doesnt exist yet. Let's go ahead and add it. Put this code under the route for our home page:

        app.get('/secured', (req, res) => {
                res.render('secured.html')
        })

1. Now restart your app: `CTRL + C` and `node index.js`

1. Did you see the Protect Page content?

Now that we have the secured page. Lets secure it using sessions. But we first we need to setup session.


#### Session Package

1. To install the session package:

        `npm install express-session`

1. Next we add this code just below `const app = express()`:

        app.use(session({
                secret: 'secret',
                resave: false,
                saveUninitialized: false
        }))

1. Finally, replace the code for the secured page route with this:

        app.get('/secured', (req, res) => {
                if (!req.session.login) {
                        return res.redirect('/login')
                }
                res.render('secured.html')
        })

1. Restart the app and go to the secured page. You will now be redirected to the login page. 

1. However the login page is non existent, so let's add it. Add this route just below the secured page:

        app.get('/login', (req, res) => {
                res.render('login.html')
        })

1. Restart the app. Now everytime you go to the Secured Page, you are redirected to the login page

*These view files are in the `data/view` directory already. So everything just works.*

## Congratulations you've just secured a page using sessions!

At this point you know the drill. Git commit if you want. You know you want to.

#### Checkpoints

If for some reason, you didnt get it right, you can check the correct code in the `checkpoints` branch. This one is on a commit named `Chapter 3`.

## Chapter 4 - Form Submit
A staple of every web app is the ability to submit data from forms.

We already have a login page. However, we dont have a route to receive the submitted data.

Try clicking the Login button in the login page. You'll get a `Cannot POST /login`. Notice that its a POST request.

Let's add a route to handle our submitted form data. 

1. Add this below the GET login route. Notice that its a post route instead of get:

        app.post('/login', (req, res) => {
                res.send('Form submit handled!')
        })

1. Restart the app and try logging in again. 

Now we have a post route for login. However we need to process the submitted data. Let's try and show it.

1. Replace the post login route code with this:

        app.post('/login', (req, res) => {
                let post = req.body

                res.send(post)
        })

1. Restart the app. Did you get a blank screen after submit?

This is because express does not have a way to handle POST data yet. Data submitted from our login form is not processed.

1. Now lets install the body parser package.



        npm install body-parser

1. Add this below `const session = require('express-session')`:

        const bodyParser = require('body-parser')

1. Setup the body parser with express. Under `const app = express()`, add this code:

        // Parse http body
        app.use(bodyParser.json()) // to support JSON-encoded bodies
        app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
                extended: true
        }))

1. Restart the app and submit the login form again.

Did you get the string 

        {"email":"developers@example.com","password":"password123"}

?


Good. Now we can process post data. The only thing left to do is to check if the email and password are correct, and set the session.

1. Replace the code for the post login route with this:

1. Restart the app. Now try logging in. Did you get to the secured page?

1. Now try changing the email or password to something else. Did you get the `Invalid email or password.` error?

1. Now try after logging in successfully, open a different browser and go to the secure page. Were you able to visit it or not? You shouldnt be able to visit it. Why? Since a session is tied to the browser you used to login.

To finish this off, lets add a logout. Every session needs a logout.

        app.get('/logout', (req, res) => {
                req.session.login = false
                res.redirect('/')
        })

1. Restart the app.

Bonus!

By now you are probably tired of restarting the app every time you have made changes. Say no more!

1. Run

        npm install nodemon --save-dev

1. In your `package.json`, change the  `scripts` entry into

        "scripts": {
                "dev": "nodemon index.js",
                "test": "echo \"Error: no test specified\" && exit 1"
        },

1. Now in the terminal: `npm run dev`

This will start nodemon once, and everytime your app code changes, the app automatically restarts, saving you time.


## Congratulations you've just cracked the form submission puzzle!

At this point you know the drill. Git commit if you want. You know you want to.

#### Checkpoints

If for some reason, you didnt get it right, you can check the correct code in the `checkpoints` branch. This one is on a commit named `Chapter 4`.



