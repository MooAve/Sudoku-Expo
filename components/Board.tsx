import { View } from "react-native";
import TileRow from './TileRow';

function randInt(max : number) {
    return (Math.floor(Math.random() * max));
}

function generateBoard() {
    /*
        Generate a random sudoku board
        Returns as a 2D Array matrix
    */

    console.log("Starting Sudoku Generation...")

    let tiles : any[] = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    let row : number = 0;

    while (row < 9) {
        let numsAvail : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];         // Numbers available for this column
        let totalNumsAvail : number[] = Object.assign([], numsAvail);   // Numbers available for this row
        let prevNums : any[] = [[],[],[],[],[],[],[],[],[]]             // Numbers previously tried at each column in this row

        let max : number = 8;
        let col : number = 0;

        while (col < 9) {

            // Move back by one column if none can be placed at the current column
            if (numsAvail.length === 0) {

                col--;

                // Try the previous row again if generating the current row has failed
                if (col < 0) {
                    row -= 2;
                    break;
                }

                totalNumsAvail.push(tiles[row][col])
                numsAvail = totalNumsAvail.filter( e => 
                    !prevNums[col].includes(e)
                );
                prevNums[col].push(tiles[row][col]);

                max = numsAvail.length - 1
                continue;
            } 

            let numPos : number = randInt(max);
            let num : number = numsAvail[numPos];

            tiles[row][col] = num

            // Try generating another number if the random number has been tried at this spot before
            if (prevNums.includes(num)) {
                numsAvail.splice(numsAvail.indexOf(num), 1);
                max--;
                continue;
            }

            let tilePlaced : boolean = true;

            let rowPos : number = 0

            // Check all previously generated rows to ensure that the number can be placed
            while (rowPos < row) {
                let prevRow : any[] = tiles[rowPos];

                // Check if this number has appeared in the current column
                if (prevRow[col] === num) {
                    
                    numsAvail.splice(numsAvail.indexOf(num), 1);
                    max--;
                    tilePlaced = false;
                    break;
                }

                // Check if this number has appeared in the current 3x3 box
                if (Math.floor(rowPos / 3) === Math.floor(row / 3)) {
                    let boxColStart : number = Math.floor(col / 3) * 3;
                    let box : any[] = prevRow.slice(boxColStart, boxColStart + 3);

                    if (box.includes(num)) {
                        numsAvail.splice(numsAvail.indexOf(num), 1);
                        prevNums[col].push(num);
                        max--;
                        tilePlaced = false;
                        break;
                    }
                }

                rowPos++;
            }

            if (!tilePlaced) {
                continue;
            }
            
            // Remove the placed number from the list of possible numbers for this row
            totalNumsAvail.splice(totalNumsAvail.indexOf(num), 1);
            numsAvail = Object.assign([], totalNumsAvail);

            max = numsAvail.length - 1;

            col++;
        }

        row++;
    }

    return tiles
}

export default function Board() {
    let tiles : any[] = generateBoard();

    tiles.forEach((el : number[]) => {
        console.log(el.toString());
    })

    return(
        <View>
            {tiles.map((tileRow : any, index : number) => {
                return (
                    <TileRow key = {index} row={index} tiles={tileRow}></TileRow>
                )
            })}
        </View>
    )
}
