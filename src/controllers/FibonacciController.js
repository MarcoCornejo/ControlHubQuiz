const calculateFibNumber = require('../fibonacci/fibonacci');

function getFibNumber(rawFibIndex){
    const fibIndex = parseInt(rawFibIndex);
    if(isNaN(fibIndex)) return "Not a number";

    return "Your fibonacci number is " + calculateFibNumber(fibIndex);
}

module.exports = getFibNumber;
