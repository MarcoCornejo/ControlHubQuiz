
module.exports = (app) => {
    app.get("/getFib/:fibIndex", (req, res, next) => {
        const fibIndex = parseInt(req.params.fibIndex);
        if(isNaN(fibIndex)) { return res.json('Not a number') };
        res.json('Hello there, your entered number is: ' + req.params.fibIndex);
    });
}