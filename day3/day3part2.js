// Obj: Find the greatest **12** digit combo of numbers, without rearranging the string,
// and add them together for the total joltage output
const fs = require("fs");

// Will need to probably make a for loop (or while loop) to determine the highest numbers
// Will also need to pop specific numbers out of the sorted array once they are used
    // For example, once a 7 is used in the solution, 7 should be removed from the sorted array at that exact element
// Might also want to pop numbers out of the sorted array if they return -1 in `indexOf` check

// get input from file and define variables
const file = fs.readFileSync(
    `${__dirname}/../inputs/day3input-test.json`,
    "utf8",
);
const data = JSON.parse(file);
const batteryBanks = data.batteryBanks;
let joltageSum = 0;

// for each element:
batteryBanks.forEach((bank) => {
    // convert bank into array of strings
    let battery = bank.toString().split("");

    // create a new array and sort
    let sorted = battery.map((x) => x);
    sorted.sort((a, b) => b - a);

    // if the largest number is the last digit in battery, return 1
    let element = battery.indexOf(sorted[0]) == battery.length - 1 ? 1 : 0;

    // select largest number / position based on element variable
    let largest = {
        num: sorted[element],
        pos: battery.indexOf(sorted[element]),
    };

    // find the second largest number in the remaining string after the largest number
    let secondLargest = battery.slice(largest.pos + 1).sort((a, b) => b - a)[0];

    // add number to joltageSum
    joltageSum += Number(largest.num.toString() + secondLargest.toString());
});

console.log("Joltage Sum:", joltageSum);
