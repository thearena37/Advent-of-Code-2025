// Obj: Find the greatest 2 digit combo of numbers, without rearranging the string,
// and add them together for the total joltage output
const fs = require("fs");

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
