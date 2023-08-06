// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}


// we declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to yens
    let valueInYen = valueInDollar * 127.9;
    //return the yen value
    return valueInYen;
}

// we declare the function with the exact name "fromYenToPound"
const fromYenToPound = function(valueInYen){
    // convert the given valueInYen to pounds
    let valueInPound = valueInYen * 0.8;
    //return the yen value
    return valueInPound;
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
};

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };

// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar };

// we include fromDollarToYen here as well because it needs to be exported
module.exports = { sum, fromDollarToYen };

// we include fromYenToPound here as well because it needs to be exported
module.exports = { sum, fromYenToPound };