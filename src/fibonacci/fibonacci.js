function calculateFibNumber(fibIndex){
    let nextFibNumber = 1;
    let currentFibNumber = 0;

    for(let i=0; i<fibIndex; i++){
        let tempNumber = nextFibNumber;
        nextFibNumber = nextFibNumber + currentFibNumber;
        currentFibNumber = tempNumber;
    }

    return currentFibNumber;
}

module.exports = calculateFibNumber;