
module.exports = (app) => {
    app.get("/getFib/:fibIndex", (req, res, next) => {
        const fibIndex = parseInt(req.params.fibIndex);
        if(isNaN(fibIndex)) return res.json('Not a number');

        res.json("Your fibonacci number is " + getFibNumber(fibIndex));
    });
    
}

function getFibNumber(fibIndex){
    let nextFibNumber = 1;
    let currentFibNumber = 0;

    for(let i=0; i<fibIndex; i++){
        let tempNumber = nextFibNumber;
        nextFibNumber = nextFibNumber + currentFibNumber;
        currentFibNumber = tempNumber;
    }

    return currentFibNumber;
}