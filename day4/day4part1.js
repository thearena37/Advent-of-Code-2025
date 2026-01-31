// Objective: find the rolls of paper that can be accessed by
//   a forklift. (of the 8 adjecent tiles to a given paper roll,
//   four of them must be empty)
const fs = require("fs");

const file = fs.readFileSync(
    `${__dirname}/../inputs/day4inputs.json`,
    "utf8",
);
const data = JSON.parse(file);
const paperRolls = data.paperRollsTest

// data needs to be converted into a 2D grid
// move through each item
// skip items that are '.'
// look at each adjacent position for '@'s
// add to a valid counter if one of the adjacent positons is '.'
// also add to a counter if one of the adjacent positons 
//   doesn't exist
// if there are 5 or more empty positions around it, then turn
//   the '@' to an 'X'

// when checking position, avoid `-1` as a math result,
//   because it will just wrap the element to the back
//   of the array and not accurately record the empty
//   position

// where you need to look in relation to position
    // pos(col-1)(row-1)
    // pos(col-1)
    // pos(col-1)(row+1)

    // pos(col)(row-1)
    // pos(col)(row+1)

    // pos(col+1)(row-1)
    // pos(col+1)
    // pos(col+1)(row+1)

paperRolls.forEach(roll => {
    roll = roll.split("")
    console.log(roll)
});

for (let row = 0; row < paperRolls.length; row++) {
    for (let col = 0; col < paperRolls[0].length; col++) {
        let counter = 0
        let currPos = paperRolls[row][col]
        
        while (counter < 5) {
            if (paperRolls[row-1][col-1] == '.') { counter += 1 }
            if (paperRolls[row-1][col] == '.') { counter += 1 }
            if (paperRolls[row-1][col+1] == '.') { counter += 1 }
    
            if (paperRolls[row][col-1] == '.') { counter += 1 }
            if (paperRolls[row][col+1] == '.') { counter += 1 }
    
            if (paperRolls[row+1][col-1] == '.') { counter += 1 }
            if (paperRolls[row+1][col] == '.') { counter += 1 }
            if (paperRolls[row+1][col+1] == '.') { counter += 1 }
        }

        if (counter > 4) {
            currPos = 'x'
        }
        
    }
    
}

console.log(paperRolls[3][4])
