const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(express.static(__dirname + "/../public/includes"));

app.get('/', (req, res) => {
	res.render('index')
});

const server = app.listen(3000, () => {
	console.log("Blog app listening on port: " + server.address().port)
});
