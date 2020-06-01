const express = require('express');
const app = express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});

app.listen(4000, () => {
	console.log('Server running on port 4000');
});

app.get('/coData', (req, res, next) => {
	const number = Math.ceil(350 + Math.random() * 4650); // should be a number from 350 up to 350+4650 == 5000

	res.json({ data: number });
});
