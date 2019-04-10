//in case we want to expand on our server this server file will be here to do that.
//
//.use() and .static allow us to tell express to serve up all files from our designated path given.
//.listen() - the port that express should use, for development purposes so as to get no errors from OS. port 3000 works for this.
//
//Refreshes on pages was throwing 'Cannont GET /page' screen. <-get requests
//response = res , request = req -> these can change the behavior of the req/res, as done below for res. 
//
// the port variable is for Heroku compatibility, defaults to port 3000 if heroku doesn't assign it a port automatically. 
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});

