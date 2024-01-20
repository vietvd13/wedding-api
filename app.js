require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const http = require('http');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const router = require('./routes');
app.use(router);

const errorHandle = require('./utils/errorHandle');
app.use(errorHandle);

const server = http.createServer(app);

const PORT = process.env.PORT || 1325;

const { connectToDB } = require('./utils/db');

connectToDB()
	.then(() => {
		server.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch(err => {
		console.log(err);
	});