
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.get( '/', (req,res) => {
	res.send('Hello World');
});
app.use( '/api',routes);

app.listen(port, () => {
	console.log(`Servidor escutando na porta :${port}`);
});
