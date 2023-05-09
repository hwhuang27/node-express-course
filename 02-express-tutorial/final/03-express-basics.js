// added notes below

const express = require('express');
const path = require('path');
const app = express();

// Static Asset - an asset that the server does not need to change
// placed in designated folder, usually called 'public'
// path, mime types, status codes set up automatically by Express

// examples: images, CSS stylesheets, javascript files

// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'));
//     // adding to static assets
//     // Server side rendering - html templating
// })

app.get('*', (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
})

app.listen(5000, () => {
  console.log(`Listening on port 5000...`);
})