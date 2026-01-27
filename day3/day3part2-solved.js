// Obj: Find the greatest **12** digit combo of numbers, without rearranging the string,
// and add them together for the total joltage output
const fs = require("fs");

function find_largest(battery, sorted, number) {
    let largest = {};
    // find which element has the largest valid number
    for (const digit of sorted) {
        if (battery.indexOf(digit) == -1) {
            continue
        }
        if (battery.indexOf(digit) <= battery.length - number) {
            largest = {
                num: digit,
                pos: battery.indexOf(digit),
                sortedPos: sorted.indexOf(digit),
            };
            break;
        }
    }

    return largest
}

function find_battery_joltage(battery, sorted) {
    let batteryJoltage = "";

    for (let number = 12; number > 0; number--) {
        // find the largest digit
        var largest = find_largest(battery, sorted, number);
        // remove the digit from the sorted array
        sorted.splice(largest.sortedPos, 1);
        // remove unusable numbers from battery array
        battery.splice(0, largest.pos + 1)

        // add the largest digit to batteryJoltage
        batteryJoltage += largest.num
    }

    return batteryJoltage;
}

function find_joltage_sum() {
    // get input from file
    const file = fs.readFileSync(
        `${__dirname}/../inputs/day3input.json`,
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
        let sorted = battery.map((x) => x).sort((a, b) => b - a);

        // find battery joltage and add to joltageSum
        joltageSum += Number(find_battery_joltage(battery, sorted));
    });

    console.log("Joltage Sum:", joltageSum);
}

find_joltage_sum();
