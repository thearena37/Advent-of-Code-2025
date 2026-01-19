// Obj: Find the greatest 2 digit combo of numbers, without rearranging the string, and add them together for the total 
// joltage output
const fs = require('fs')

function findLargest (battArray) {
    let largest = {}
    let sorted = battArray
    sorted.sort((a, b) => b-a)
    console.log("sorted at 0:", sorted[0])
    console.log("index of sorted at 0:", battArray.indexOf(sorted[0]))
    console.log("array length", battArray.length)
    if (battArray.indexOf(sorted[0]) == battArray.length-1) {
        console.log(`${sorted[0]} is the last number in the array`)
        sorted.shift() }
    largest.num = sorted.shift()
    console.log(largest.num)
    largest.pos = battArray.indexOf(largest.num)
    return largest
}

// get input from file
const file = fs.readFileSync(`${__dirname}/../inputs/day3input.json`, 'utf8')
const data = JSON.parse(file)
// convert input to array
const batteryBanks = data.batteryBanksTest

let joltageSum = 0

// for each element:
batteryBanks.forEach(bank => {
    console.log(bank)
    // convert bank into array of strings
    let batteries =  bank.toString().split('')
    
    let largestNumber = findLargest(batteries)
    // console.log('num:', largestNumber.num, '| pos:', largestNumber.pos)

    // // identify the second largest number in the file
    // // let secondNumber = { num: batteriesSort.shift() }
    // //remove any numbers before largest number
    // batteries = batteries.slice(largestNumber.pos)
    // secondNumber.pos = batteries.indexOf(secondNumber.num)

    // // ensure the second number is valid 
    // while(secondNumber.pos == -1) {
    //     secondNumber.num = batteriesSort.shift()
    //     secondNumber.pos = batteries.indexOf(secondNumber.num)
    // }

    // // create number from digits and add to joltage sum
    // console.log(largestNumber.num + secondNumber.num)
});
    // put the two digits together
    // convert the string to a number
    // add number to joltage sum
