var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  TodoList = require('./api/models/todoListModel').default, //created model loading here
  User = require('./api/models/userModel').default, //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

var userRoutes = require('./api/routes/userRoutes'); //importing route
userRoutes(app);

// serve static assets normally
app.use(express.static(__dirname + '/public'))

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);