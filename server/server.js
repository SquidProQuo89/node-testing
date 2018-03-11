const express = require('express');

var app = express();

app.get('/', (req, res) => {
 res.status(404).send({
 	error: 'Page not found.'
 });

});

app.get('/users', (req, res) => {
 res.status(200).send([
 	{
 		name: 'Taylor',
 		age: 28
 	},
 	{
 		name: 'Larry',
 		age: 53
 	},
 	{
 		name: 'Mr. Bojangles',
 		age: 33
 	}
 ]);

});


app.listen(3000);

module.exports.app = app