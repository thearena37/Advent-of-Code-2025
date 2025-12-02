const fs = require('fs')

//import id ranges
const file = fs.readFileSync(`${__dirname}/../inputs/day2input.json`, 'utf8')
const idData = JSON.parse(file)

// create 'invalidSum' integer variable, set to 0
let invalidSum = 0
let idRanges = idData.idRanges

//for each range (range)
idRanges.forEach(range => {
    // create 'bounds' array variable, set to the split of 'range' at the '-'
    let bounds = range.split("-")
    // if both 'bounds' elements are equal character length AND the character length is odd
        // continue with for loop
    if (bounds[0].length === bounds[1] && bounds[0].length % 2 === 1) { return }
    // convert both 'bounds' elements to numbers
    let lBound = Number(bounds[0])
    let uBound = Number(bounds[1])

    ////////////////// POSSIBLE SEPARATE FUNCTION //////////////////
    // for every 'number' between the lower bound and upper bound
    for (let num = lBound; num <= uBound; num++) {
        // create 'temp' string variable, set to 'number' converted to string
        let temp = num.toString()
        let compare = []
        // skip check if number has odd amount of digits
        if (temp.length % 2 === 1) { continue }
        // split 'temp' in half
        compare[0] = temp.slice(0, temp.length/2)
        compare[1] = temp.slice(temp.length/2)
        // if temp[0] == temp[1]
            // add 'number' to 'invalidSum' variable
        if (compare[0] === compare[1]) { invalidSum += num }
    }
    //////////////////                            //////////////////

});

console.log(invalidSum)

// ANSWER: 24157613387
