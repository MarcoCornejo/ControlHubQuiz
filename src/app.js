
module.exports = (app) => {
    app.get("/getFib/:fibIndex", (req, res, next) => {
        res.json('Hello there, your entered number is: ' + req.params.fibIndex);
    });
}