
// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var liveReload = require('express-livereload');


liveReload(app, {
	watchDir: __dirname + '/public'
});


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res, next) {
  
});



var port = process.env.PORT || 1800;        // set our port

// ROUTES FOR OUR API
var router = express.Router();              // get an instance of the express Router

router.get('/', function(req, res) {
  
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);



// START THE SERVER
app.listen(port, function(){
  console.log("the application started at port " + port);
});



