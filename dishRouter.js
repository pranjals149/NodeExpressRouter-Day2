const express = require('express')
const bodyParser = require('body-parser')

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.get('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
})
    .get((req, res, next) => {
        res.end("Contains all dishes");
})
    .post((req, res, next) => {
        res.end("Name: " + req.body.name + "Description: " + req.body.description);
})
    .put((req, res, next) => {
        res.end("Operation not supported");
})
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end("deleting all dishes");
});

module.exports = dishRouter;