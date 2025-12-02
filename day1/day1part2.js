const fs = require('fs');

async function decoder() {
    // current position
    let currPos = 50
    // how many times the current position passes 0
    let zeroCount = 0

    // load the file
    const file = fs.readFileSync(`${__dirname}/day1input.csv`, 'utf-8')
    const decoder = file.split('\r\n')

    // read all lines of the file
    for (direction of decoder) {
        let moveNum = (direction.slice(0,1) == "L") ? -Number(direction.slice(1)) : Number(direction.slice(1))
        
        let newPos = currPos + moveNum

        while (newPos < 0 || newPos > 99) {
            if (newPos > 99) {
                zeroCount += 1
                newPos -= 100
            } else if (newPos < 0) {
                zeroCount += 1
                newPos += 100
            }
        }

        currPos = newPos

    }

    console.log (`Password is: ${zeroCount}`)

}

decoder();

// 7282 - wrong, too high
// 6744 - wrong, didn't give a too high/low
// 6244 - wrong
// 6643 - wrong
// 6216 - wrong
// ANSWER: 6223
