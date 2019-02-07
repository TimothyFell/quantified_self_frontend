# Quantified Self Frontend API

This is a Node.js app that consumes an API we built as a backend service to consume and serve its data to users in this frontend.


## Setup

### Clone
As always start by forking the repo, cloning it to your machine and cd-ing into the new repository in your terminal.

````terminal
$ git clone git@github.com:TimothyFell/quantified_self_backend.git quantified_self_backend
$ cd quantified_self_backend
````

### Tech Stack
We used Node.js to handle simple building out a simple script-based frontend.

### NPM
Use NPM to install all the required packages.

````terminal
$ npm install
$ npm audit fix
````

## Contributions

If you would like to contribute to this project please fork the repository and send us a pull request with your changes. To get started once you fork, follow the instructions above in the Setup section.

## Running Tests
Now you are ready to run the tests! Use the following command to run all your tests.

````terminal
$ npm test
````

or this command to run a specific file or directory.

````terminal
$ mocha ./spec/path/to/file/or/directory --exit
````
