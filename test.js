// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

//Test function fromEuroToDollar
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

//Test function fromDollarToYen
test("1.206 dollars should be 127.9 yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its supposed to be used
    const yens = fromDollarToYen(2)

    // if 1.206 dollars are 127.9 yens, then 2 dollars should be (2 * 127.9)
    const expected = 2 * 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(2)).toBe(255.8); //1.206 dollars are 127.9 yens, then 2 dollars should be = (2 * 127.9)
})

test("1.206 dollars should be 127.9 yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its supposed to be used
    const yens = fromDollarToYen(2)

    // if 1.206 dollars are 127.9 yens, then 2 dollars should be (2 * 127.9)
    const expected = 2 * 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(2)).toBe(255.8); //1.206 dollars are 127.9 yens, then 2 dollars should be = (2 * 127.9)
})

test("127.9 yens should be 0.8 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its supposed to be used
    const pounds = fromYenToPound(130)

    // if 127.9 yens are 0.8 pounds, then 130 yens should be (130 * 0.8)
    const expected = 130 * 0.8; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(130)).toBe(104); //127.9 yens are 0.8 pounds, then 130 yens should be = (130 * 0.8)
})