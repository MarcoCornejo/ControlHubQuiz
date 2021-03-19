const calculateFibNumber = require('./controllers/FibonacciController');

module.exports = (app) => {
    app.use("/getFib/:fibIndex", (req, res, next) => {
        res.json(calculateFibNumber(req.params.fibIndex));
    });
    
}

