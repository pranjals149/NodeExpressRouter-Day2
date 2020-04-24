const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);

// app.use(app.router);
// dishRouter.initialize(app);

app.use(express.static(__dirname + '/public'));

// app.get('/dishes/:dishId', (req, res, next) => {
//     res.end("Contains all details of the dishes Id: " + req.params.dishId);
// })

// app.post('/dishes/:dishId', (req, res, next) => {
//     res.end("POST operation not supported on dishId's: " + req.params.dishId);
// })

// app.put('/dishes/:dishId', (req, res, next) => {
//     res.write("Updating the dishes" + "\n");
//     res.end("Updating the dishes named: " + req.body.name + 'Details: ' + req.body.description);
// })

// app.delete('/dishes/:dishId', (req, res, next) => {
//     res.end("deleting dish with dishId: " + req.params.dishId);
// })

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is Express Server .. !!</h1></body></html>');
})

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running on: http://${hostname}:${port}`);
})