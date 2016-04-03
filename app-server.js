/* Modules dependencies */
var express = require('express'),
	app = express();

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

var port = process.env.PORT || 3000; // server port

/* create server */
app.listen(port, function(){
	console.log("Server Listening on port : ",port);
})

