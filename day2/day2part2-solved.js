const fs = require('fs')

//import id ranges
const file = fs.readFileSync(`${__dirname}/../inputs/day2input.json`, 'utf8')
const idData = JSON.parse(file)

// create and set variables
let invalidSum = 0
let idRanges = idData.idRanges

function factorMatch (numStr) {
    let factors = []
    let isInvalid = false
    
    // add factors to factor array
    for (let n = 1; n < numStr.length; n++) {
        if (numStr.length % n === 0) { factors.push(n) }
    }
    
    // split the numbers by each factor
    factors.forEach(factor => {
        let compare = []
        tempNum = numStr

        //split the string by that factor until string is empty
        while(tempNum != "") {
            //push the slice into compare
            compare.push(tempNum.slice(0, factor))
            //slice the beginning off tempNum by 'factor' amount
            tempNum = tempNum.slice(factor)
        }

        let uniqueSet = new Set(compare)
        if (uniqueSet.size === 1 ) {
            isInvalid = true
        }
    })

    return isInvalid
}

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

        // find factors for the amount of digits in the number
         if (factorMatch(temp)) { invalidSum += num }

    }
});

console.log(invalidSum)

// ANSWER: 33832678380
