// Obj: Find the greatest 2 digit combo of numbers, without rearranging the string,
// and add them together for the total joltage output
const fs = require("fs");

// returns the largest number in the
function findLargest(battArray) {
    // let largest = {}
    // create a new array and sort
    let sorted = battArray.map((x) => x);
    sorted.sort((a, b) => b - a);
    let loop = -1;

    // log the largest digit in the array
    let largest = {
        num: sorted[0],
        pos: battArray.indexOf(sorted[0]),
    };
    // if the largest number in the array is the last digit, pick the next largest digit
    if (battArray.indexOf(sorted[0]) == battArray.length - 1) {
        largest = {
            num: sorted[1],
            pos: battArray.indexOf(sorted[1]),
        };
    }

    // find the second largest number in the remaining string after the largest number
    let secondLargest = battArray
        .slice(largest.pos + 1)
        .sort((a, b) => b - a)[0];

    console.log(largest.num, secondLargest)

    return Number(largest.num.toString() + secondLargest.toString());
}

// get input from file
const file = fs.readFileSync(
    `${__dirname}/../inputs/day3input-test.json`,
    "utf8"
);
const data = JSON.parse(file);

console.log('data', data)
// convert input to array
// const batteryBanks = data.batteryBanksTest;
const batteryBanks = data.batteryBanks;


let joltageSum = 0;

// for each element:
batteryBanks.forEach((bank) => {
    // convert bank into array of strings
    console.log(bank)
    let batteries = bank.toString().split("");
    // console.log(batteries)

    joltageSum += findLargest(batteries);
});

console.log("Joltage Sum:", joltageSum);
