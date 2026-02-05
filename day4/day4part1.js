// Objective: find the rolls of paper that can be accessed by
//   a forklift. (of the 8 adjacent tiles to a given paper roll,
//   at least 5 of them must be empty)
const fs = require("fs");

// get puzzle input
const file = fs.readFileSync(`${__dirname}/../inputs/day4inputs.json`, "utf8");
const data = JSON.parse(file);
const paperRolls = data.paperRolls;

// create 2-D array
floorMap = paperRolls.map((roll) => roll.split(""));

function checkAdjacents(row, col) {
    const rowOffset = [-1, 0, 1];
    const colOffset = [-1, 0, 1];
    let emptySpaces = 0;

    // check every offset (both for loops)
    for (rOff of rowOffset) {
        for (cOff of colOffset) {
            // not adjacent, skip
            if (rOff === 0 && cOff === 0) { continue; }

            // if the adjacent coordinate if off the map or the space is empty, increment emptySpaces
            if (
                floorMap[row + rOff]?.[col + cOff] === undefined ||
                floorMap[row + rOff][col + cOff] === "."
            ) { emptySpaces += 1; }
        }
    }
    return emptySpaces;
}

function checkCoordinates() {
    let movedRolls = 0;
    let movableRolls = 1;

    while (movableRolls > 0) {
        // reset rolls moved over last round
        movableRolls = 0

        // check every coordinate (both for loops)
        for (let row = 0; row < floorMap.length; row++) {
            for (let col = 0; col < floorMap[row].length; col++) {
                // skip coordinates that are already empty
                if (floorMap[row][col] === ".") { continue; }
                
                // check each adjacent
                let emptyAdjacents = checkAdjacents(row, col);
                
                // if there are more than 4 empty cells, increment movedRolls and change coordinate to empty
                if (emptyAdjacents > 4) {
                    movableRolls += 1;
                    floorMap[row][col] = ".";
                }
            }
        }

        // add movedRolls to movableRolls
        movedRolls += movableRolls
    }
        
    console.log(movedRolls);
}

checkCoordinates();
