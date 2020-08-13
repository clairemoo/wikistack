/** @format */

const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

const expressStaticFiles = express.static((__dirname, 'public'));

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
	res.send('Hello world!');
});

app.listen(3001, function () {
	console.log('Listening!');
});
