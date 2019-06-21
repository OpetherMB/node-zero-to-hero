# Node Zero to Hero

Learn how to build web apps using Node.js

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


#### Setting Up our Work Environment
1. Start by creating a work directory of your choice. This tutorial used: `C:/dev/nodejs`
1. Open the `Command Prompt` inside your work directory.
1. Clone the tutorial repo: `git clone https://github.com/kosinix/node-zero-to-hero.git`
1. You should see a directory with just a `.gitignore` file.

1. Start `Visual Studio Code`
1. Open the directory `node-zero-to-hero`
1. Open the VS Code terminal in `Terminal > New Terminal`. Or use the shortcut `CTRL + (backtick)`

#### Initializing Our Code
1. In the VS Code terminal run: `npm init`
1. Enter the following details:

        name: node-zero-to-hero

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

*NPM - "npm" stands for Node Package Manager.*

### Chapter 1 - Express JS
Express JS is a framework for creating web apps. We can write web apps without using Express but we would write a lot more code. 



1. Start by installing Express JS. 

1. We use the following command: `npm install express`

1. This does 3 things:

    1. Adds a `package-lock.json` file. This file is used by node to keep track of its dependencies.
    1. Create a `node_modules` directory. This is where packages are installed.
    1. Update `package.json` and add `express` under `dependencies`.

*Package - A "package" is a piece of code that we can re-use. Express JS is just another package.*

*Dependencies - Are packages written by other people that our app "depends" on.*


##### Creating An Entry-Point to Our Code

1. Go to VS Code's Explorer panel. Click the New File icon. Type `index.js`

1. In the terminal type: `node index.js`. Since index.js is empty it will do nothing and exit. Let's add some code to it.

1. Open `index.js` by clicking on it in the Explorer panel.

1. Inside it, add the following code:

        const express = require('express')

        const port = 3000
        const app = express()
        app.listen(port, () => console.log(`App running on http://localhost:${port}`))

1. Now run again `node index.js`. 
1. You should see the message `App running on http://localhost:3000`



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

If for some reason, you didnt get it right, you can check the correct code in the `checkpoints` branch. This one is on a commit named `"chapter-01"`.

