const express = require('express'),
      bodyParser = require('body-parser'),
      projectValues = require('./public/projectValues') 
      ;



const app = express();

// define controllers   
const index = require('./Controllers/index');
const dictionary = require('./Controllers/dictionary');



//Config routes 
function WebAppConfig() {
	app.use(bodyParser.json());
  	app.use('/', index);
	app.use('/dictionary', dictionary);
	app.get('/*', function (req, res) {
		res.status(405).send('This is a wrong page')
		//res.redirect("http://google.com");
	})
    
}

WebAppConfig();


// Start server !

app.listen(projectValues.port, () => {
  console.log('Server started on port# ' + projectValues.port );
})

//For Test **** 
//require('./test/jsontest').jsonTest();


