const fs = require('fs');
const readline = require('readline');

function checkFlow(num) {
    // checks for overflow or underflow and returns the corrected number if true
    // if neither are true, returns the number originally inputted
    if (num < 0) { return num + 100 };
    if (num >= 100) { return num - 100 };
    return num
};

async function decoder() {
    // current position
    currPos = 50
    // how many times the current position passes 0
    zeroCount = 0

    // load the file
    const fileStream = fs.createReadStream(`${__dirname}/day1input.csv`)
    const decoder = readline.createInterface(fileStream);

    // read all lines of the file
    for await (direction of decoder) {
        moveNum = Number(direction.slice(1));
        const operator = direction.slice(0, 1);

        // add the amount of full rotations to zero counter and remove those rotations from move number 
        if (moveNum > 99) {
            zeroCount += Math.trunc(moveNum/100)
            moveNum = moveNum % 100
        }
        
        // add or subtract the direction from current position
        currPos = (operator == "L") ? (currPos - moveNum) : (currPos + moveNum)

        if (currPos > 99 || currPos < 1) { zeroCount += 1 }

        currPos = checkFlow(currPos)

        // console.log(zeroCount)
    }

    console.log (`Password is: ${zeroCount}`)

}

decoder();

// ANSWER: 7282 - wrong, too high
// ANSWER: 6744 - wrong, didn't give a too high/low
// ANSWER: 6244
