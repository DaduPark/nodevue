
const express = require('express'),
      app = express(),
      util = require('util');
      
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);



app.get('/', (req, res) => {
	
    //res.send("Hello NodeJS!!");
	res.send(req.query.name);
	util.log(req.query.name+__dirname);
});

 const server = app.listen(7000, function(){
    console.log("Express's started on port 7000");
});
