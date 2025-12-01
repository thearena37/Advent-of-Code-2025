const fs = require('fs');
const readline = require('readline');

function checkFlow(num) {
    // checks for underflow, increases the number by 100 until the number is between 0 and 99, inclusive
    while (num < 0) {
        num = num + 100
        zeroCount += 1
    }
    // checks for overflow and reduces the number by 100 until the number is between 0 and 99, inclusive
    while(num >= 100) {
        num = num - 100
        // if the number is 0, don't increment zeroCount
        if (num != 0) { zeroCount += 1 }
    }
    // if neither are true, returns the number originally inputted
    return num
};


async function decoder() {
    // current position
    currPos = 50
    // track how many times the current position ends at 0
    zeroCount = 0

    // reading the file
    const fileStream = fs.createReadStream(`${__dirname}/day1input.csv`)
    const decoder = readline.createInterface(fileStream);

    // read all lines of the file
    for await (direction of decoder) {
        const moveNum = Number(direction.slice(1));
        const operator = direction.slice(0, 1);

        // if the operator is L, check for underflow and subtract the position by the read num
        // else, check for overflow and add the position by the read number
        currPos = (operator == "L") ? checkFlow(currPos - moveNum) : checkFlow(currPos + moveNum)

        if (currPos == 0) { zeroCount += 1 }
    }

    console.log (`Password is: ${zeroCount}`)

}

decoder();

// ANSWER: 1066
