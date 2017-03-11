NodeJS Starter
=======================
A boilerplate for Node.js web applications.

#### Get Started
The easiest way to get started is to clone the repository:
```bash
# clone boilerplate
git clone git@github.com:tranquangvu/nodejs-starter.git project_name
# go to project dir
`cd project_name`
# install npm dependencies
`npm install`
# or, if you prefer to use `yarn` instead of `npm`
yarn install
# install bower dependencies
bower install
# add .env file
vim .env
# start livereload server
gulp
```
Note: To make livereload work, you need to install LiveReload extension on your browser. [LiveReload Chrome Extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)

#### Keywords
* ExpressJS
* Mongoose
* ES6
* LiveReload
* Pug View Engine
* Bower
* Gulp
* Sass

#### Base Features
* Local Authentication using Email and Password
* OAuth 2.0 Authentication via Facebook, Google, GitHub
* Flash notifications
* MVC Project Structure
* Node.js clusters support
* Sass stylesheets (auto-compiled via gulp)
* Bootstrap 3
* Contact Form (powered by Sendgrid)
* Account Management:
    * Gravatar
    * Profile Details
    * Change Password
    * Forgot Password
    * Reset Password
    * Link multiple OAuth strategies to one account
    * Delete Account
* CSRF protection

#### License
This project is licensed under the [MIT License](https://github.com/tranquangvu/nodejs-starter/blob/master/LICENSE)
