'use strict';

// Done: Initialize your project using NPM to create and populate  package.json and package-lock.json files. Don't forget to add node_modules to your .gitignore!

// Done Require the ExpressJS package that you installed via NPM, and instantiate the app.
// Remember to install ExpressJS, and be sure that it's been added to your package.json as a dependency.
// There is also a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.
const express = require('express');
const app = express();

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

// Done: Include all of the static resources as an argument to app.use().

app.use(express.static('./public'));

// COMMENTed: Why are our files in a "public" directory now? How does ExpressJS serve files?
// They need to be in a public folder directory because that's specifically what expressjs uses - the folder that we're accessing for the app to use is the public folder.

// Done: Refactor to use arrow function
app.post('/articles', bodyParser, (req, res)=> {
  // REVIEWED: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(req.body);
  res.send('Record posted to server!!');
})

// DONE: Write a new route, using an arrow function, that will handle a request and send the new.html file back to the user
app.get('/new', (req, res)=>{
  console.log('Success..this is new.html');
  res.sendFile('new.html', {root:'./public'});
})

// Done: Refactor this to arrow function, log to the console a message that lets you know which port your server has started on
app.listen(PORT, ()=> {
  console.log(`Listening on ${PORT}`);
});
