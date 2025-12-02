const fs = require('fs');
const readline = require('readline');


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
        ///////////////////////console.log(`direction: ${direction}`)

        // determine how many full rotations was made in one direction
        if (moveNum > 99) {
            zeroCount += Math.trunc(moveNum/100)
            ///////////////////////console.log(`full rotation add to zeroCount: ${zeroCount}`)
        }

        // add or subtract the direction from current position
        if (operator == "L") {
            currPos = currPos - moveNum
            ///////////////////////console.log(`new currPos: ${currPos}`)
            // check if arrow passed 0
            if (currPos < 0) {
                currPos += 100
                // increment zeroCount
                zeroCount += 1
                ///////////////////////console.log("added to zeroCount")
                ///////////////////////console.log(`adjusted currPos: ${currPos}`)
            }
        }
        else {
            currPos = currPos + moveNum
            ///////////////////////console.log(`new currPos: ${currPos}`)
            // check if arrow passed 99
            if (currPos > 99) {
                currPos -= 100
                // increment zeroCount
                zeroCount += 1
                ///////////////////////console.log("added to zeroCount")
                ///////////////////////console.log(`adjusted currPos: ${currPos}`)

            }
        }

        if (currPos == 0) { zeroCount += 1 }
        ///////////////////////console.log(`total zeroCount: ${zeroCount}`)
    }

    console.log (`Password is: ${zeroCount}`)

}

decoder();

// ANSWER: 7282 - wrong, too high
// ANSWER: 6744 - wrong, didn't give a too high/low
