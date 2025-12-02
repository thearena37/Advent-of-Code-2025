const fs = require('fs')

//import id ranges
const file = fs.readFileSync(`${__dirname}/../inputs/day2input.json`, 'utf8')
const idData = JSON.parse(file)

// create and set variables
let invalidSum = 0
let idRanges = idData.idRanges

idRanges.forEach(range => {
    // create and set variables
    let bounds = range.split("-")
    let lBound = Number(bounds[0])
    let uBound = Number(bounds[1])

    // if the full range is within an the same odd number of digit length, skip this range
    if (bounds[0].length === bounds[1] && bounds[0].length % 2 === 1) { return }

    // for every number between the lower and upper bounds
    for (let num = lBound; num <= uBound; num++) {
        // create and set variables
        let temp = num.toString()
        let compare = []
        compare[0] = temp.slice(0, temp.length/2)
        compare[1] = temp.slice(temp.length/2)

        // skip check if number has odd amount of digits
        if (temp.length % 2 === 1) { continue }

        // if both halves are the same, add number to invalidSum
        if (compare[0] === compare[1]) { invalidSum += num }
    }
});

console.log(invalidSum)

// ANSWER: 24157613387
