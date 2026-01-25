let score = 0; //player score
let playing = true;

const tile1 = document.querySelector(".grid-tile1");
const tile2 = document.querySelector(".grid-tile2");
const tile3 = document.querySelector(".grid-tile3");
const tile4 = document.querySelector(".grid-tile4");

const tile5 = document.querySelector(".grid-tile5");
const tile6 = document.querySelector(".grid-tile6");
const tile7 = document.querySelector(".grid-tile7");
const tile8 = document.querySelector(".grid-tile8");

const tile9 = document.querySelector(".grid-tile9");
const tile10 = document.querySelector(".grid-tile10");
const tile11 = document.querySelector(".grid-tile11");
const tile12 = document.querySelector(".grid-tile12");

const tile13 = document.querySelector(".grid-tile13");
const tile14 = document.querySelector(".grid-tile14");
const tile15 = document.querySelector(".grid-tile15");
const tile16 = document.querySelector(".grid-tile16");

const btnStart = document.querySelector("btn__start");
const btnUp = document.querySelector("btn__up");
const btnDown = document.querySelector("btn__down");
const btnRight = document.querySelector("btn__right");
const btnLeft = document.querySelector("btn__left");

// directions
const upDirection = 1;
const downDirection = 2;
const leftDirection = 3;
const rightDirection = 4;

//create grid with all tiles initialized to 0 - no tiles
var gridTracker = [
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
];

function startGame() {
	reset();
}

const reset = () => {
	score = 0;
	playing = true;
	score.textContent = "Score: 0";
	resetGrid();
	console.log("grid reset", gridTracker);
	addTiles(2);
	updateGridDisplay();
};

function removeGaps(direction) {
	let columnArray1 = [];
	let columnArray2 = [];
	let columnArray3 = [];
	let columnArray4 = [];

	let currentNumber = 0;

	//store numbers > 0 into  4 columns without gaps
	for (let row = 0; row < gridTracker.length; row++) {
		for (let column = 0; column < gridTracker.length; column++) {
			currentNumber = gridTracker[row][column];
			if (currentNumber !== 0) {
				switch (column) {
					case 0:
						columnArray1.push(currentNumber);
						console.log("columnArray1.push");
						break;
					case 1:
						columnArray2.push(currentNumber);
						console.log("columnArray2.push");
						break;
					case 2:
						columnArray3.push(currentNumber);
						console.log("columnArray3.push");
						break;
					case 3:
						columnArray4.push(currentNumber);
						console.log("columnArray4.push");
						break;

					default:
						break;
				}
			}
		}
	}
	resetGrid();
	//copy column contents to grid starting at the bottom row to stack numbers
	//store numbers > 0 into  4 columns without gaps
	for (let column = 0; column < gridTracker.length; column++) {
		let numberToPop = 0;
		let row = 0;
		let numOfElements = 0;
		switch (column) {
			case 0:
				numOfElements = 0;
				numberToPop = columnArray1.length;
				for (let i = numberToPop; i > 0; i--) {
					currentNumber = columnArray1.pop();
					numOfElements++;
					console.log("columnArray1 popped", numOfElements);
					row = gridTracker.length - numOfElements;
					gridTracker[row][column] = currentNumber;
				}
				break;
			case 1:
				numOfElements = 0;
				numberToPop = columnArray2.length;
				for (let i = numberToPop; i > 0; i--) {
					currentNumber = columnArray2.pop();
					numOfElements++;
					console.log("columnArray2 popped", numOfElements);
					row = gridTracker.length - numOfElements;
					gridTracker[row][column] = currentNumber;
				}
				break;
			case 2:
				numOfElements = 0;
				numberToPop = columnArray3.length;
				for (let i = numberToPop; i > 0; i--) {
					currentNumber = columnArray3.pop();
					numOfElements++;
					console.log("columnArray3 popped", numOfElements);
					row = gridTracker.length - numOfElements;
					gridTracker[row][column] = currentNumber;
				}
				break;
			case 3:
				numOfElements = 0;
				numberToPop = columnArray4.length;
				for (let i = numberToPop; i > 0; i--) {
					currentNumber = columnArray4.pop();
					numOfElements++;
					console.log("columnArray4 popped", numOfElements);
					row = gridTracker.length - numOfElements;
					gridTracker[row][column] = currentNumber;
				}
				break;

			default:
				break;
		}
	}
}

function mergeColumnNumbers(direction, column) {
	let mergeNumber = 0;
	let row = 0;
	while (row < gridTracker.length - 1) {
		mergeNumber = 0;
		let firstNumber = gridTracker[row][column];
		let secondNumber = gridTracker[row + 1][column];

		if (firstNumber === secondNumber) {
			mergeNumber++;
			gridTracker[row][column] = 0;
			gridTracker[row + 1][column] = firstNumber + secondNumber;
		}

		if (mergeNumber === 0) {
			row++;
		} else if (mergeNumber > 0) {
			row += 2; // skip row avoid cumulative merge
		}
	}
	//fill gaps in Columns from any merges
	if (mergeNumber > 0) {
		console.log("removeGaps called in mergeColumnNumbers");
		removeGaps(downDirection);
	}

	return mergeNumber;
}

function hasGaps() {
	let column1HasNumber = false;
	let column2HasNumber = false;
	let column3HasNumber = false;
	let column4HasNumber = false;
	let gaps = false;

	for (let row = 0; row < gridTracker.length; row++) {
		for (let column = 0; column < gridTracker.length; column++) {
			switch (column) {
				case 0:
					if (gridTracker[row][column] > 0) {
						column1HasNumber = true;
					} else {
						if (column1HasNumber) gaps = true;
					}
					break;
				case 1:
					if (gridTracker[row][column] > 0) {
						column2HasNumber = true;
					} else {
						if (column2HasNumber) gaps = true;
					}
					break;
				case 2:
					if (gridTracker[row][column] > 0) {
						column3HasNumber = true;
					} else {
						if (column3HasNumber) gaps = true;
					}
					break;
				case 3:
					if (gridTracker[row][column] > 0) {
						column4HasNumber = true;
					} else {
						if (column4HasNumber) gaps = true;
					}
					break;
				default:
					break;
			}
		}
	}
	return gaps;
}

// merge required if 2 numbers in same column - any gaps already removed
function mergeRequired() {
	let firstNumber = -1;
	let secondNumber = -1;

	for (let row = 0; row < gridTracker.length; row++) {
		for (let column = 0; column < gridTracker.length; column++) {
			firstNumber = gridTracker[row][column];
			if (row < gridTracker.length - 1 && firstNumber > 0) {
				secondNumber = gridTracker[row + 1][column];
				if (firstNumber === secondNumber) return true;
			}
		}
	}

	return false;
}

function moveTilesDown() {
	//console.log("gridTracker before merge column numbers", gridTracker);

	let tileMoved = false;
	let numbersMerged = false;

	if (hasGaps()) {
		tileMoved = true;
		console.log("hasGaps is true");
		removeGaps(downDirection, 2);
		console.log("removeGaps called in moveTilesDown");
	}

	if (mergeRequired()) {
		for (let column = 0; column < gridTracker.length; column++) {
			mergeColumnNumbers(downDirection, column) > 0;
			numbersMerged = true;
		}
		console.log("numbersMerged is", numbersMerged);
	}

	//only add a tile if existing tiles have moved
	if (tileMoved || numbersMerged) addTiles(1);

	updateGridDisplay();
}

function moveTilesUp() {
	alert("up button works");
}

function moveTilesRight() {
	alert("right button works");
}
function moveTilesLeft() {
	alert("left button works");
}

// Returns -1 if grid full else returns vacant
function fillRandomVacantPosition() {
	let emptySpaceCount = 0;
	let result = -1; //Grid full

	//How many empty spaces
	for (let row = 0; row < gridTracker.length; row++) {
		for (let column = 0; column < gridTracker.length; column++) {
			if (gridTracker[row][column] === 0) emptySpaceCount++;
		}
	}

	// Check if the grid is full
	if (emptySpaceCount < 1) {
		return -1;
	}

	// Randomly generate position between 1 and count
	let randomPos = Math.ceil(Math.random() * emptySpaceCount);

	let betweenOneAndTen = Math.floor(Math.random() * 10) + 1;

	let tileNum = 0;
	//Randomly generate 2 or 4 - 90% 2, 10% 4
	// If it is one then select 4 otherwise 2
	tileNum = betweenOneAndTen === 1 ? 4 : 2;

	let currentPos = 1;
	//Iterate to randomly selected empty square
	for (let row = 0; row < gridTracker.length; row++) {
		for (let column = 0; column < gridTracker.length; column++) {
			if (gridTracker[row][column] === 0) {
				if (currentPos === randomPos) {
					gridTracker[row][column] = tileNum;
					return randomPos;
				}
				currentPos++;
			}
		}
	}
}

function resetGrid() {
	for (let row = 0; row < gridTracker.length; row++) {
		for (let column = 0; column < gridTracker.length; column++) {
			gridTracker[row][column] = 0;
		}
	}
}

// Adds a randomly generated tile of 2 or 4
function addTiles(quantity) {
	for (let index = 1; index <= quantity; index++) {
		fillRandomVacantPosition();
		updateGridDisplay();
	}
}

function switchColor(tileNumber) {
	let color = "#36789d";

	switch (tileNumber) {
		case 2:
			color = "#458b8b";
			break;
		case 4:
			color = "grey";
			break;
		default:
			color = "#36789d";
			break;
	}

	return color;
}

function updateGridDisplay() {
	let tileNum = 0;

	tileNum = gridTracker[0][0];
	if (tile1.textContent !== tileNum || tileNum === 0) {
		tile1.style.backgroundColor = switchColor(tileNum);
		if (tileNum !== 0) {
			tile1.textContent = tileNum;
		} else {
			tile1.textContent = "";
		}
	}
	tileNum = gridTracker[0][1];
	if (tile2.textContent !== tileNum || tileNum === 0) {
		tile2.style.backgroundColor = switchColor(tileNum);
		if (tileNum !== 0) {
			tile2.textContent = tileNum;
		} else {
			tile2.textContent = "";
		}
	}
	tileNum = gridTracker[0][2];
	if (tile3.textContent !== tileNum || tileNum === 0) {
		tile3.style.backgroundColor = switchColor(tileNum);
		if (tileNum !== 0) {
			tile3.textContent = tileNum;
		} else {
			tile3.textContent = "";
		}
	}
	tileNum = gridTracker[0][3];
	if (tile4.textContent !== tileNum || tileNum === 0) {
		tile4.style.backgroundColor = switchColor(tileNum);
		if (tileNum !== 0) {
			tile4.textContent = tileNum;
		} else {
			tile4.textContent = "";
		}
	}

	tileNum = gridTracker[1][0];
	if (tile5.textContent !== tileNum || tileNum === 0) {
		tile5.style.backgroundColor = switchColor(tileNum);
		if (tileNum !== 0) {
			tile5.textContent = tileNum;
		} else {
			tile5.textContent = "";
		}
	}
	tileNum = gridTracker[1][1];
	if (tile6.textContent !== tileNum || tileNum === 0) {
		tile6.style.backgroundColor = switchColor(tileNum);
		if (tileNum !== 0) {
			tile6.textContent = tileNum;
		} else {
			tile6.textContent = "";
		}
	}
	tileNum = gridTracker[1][2];
	if (tile7.textContent !== tileNum || tileNum === 0) {
		tile7.style.backgroundColor = switchColor(tileNum);
		if (tileNum !== 0) {
			tile7.textContent = tileNum;
		} else {
			tile7.textContent = "";
		}
	}
	tileNum = gridTracker[1][3];
	if (tile8.textContent !== tileNum || tileNum === 0) {
		tile8.style.backgroundColor = switchColor(tileNum);
		if (tileNum !== 0) {
			tile8.textContent = tileNum;
		} else {
			tile8.textContent = "";
		}
	}

	tileNum = gridTracker[2][0];
	if (tile9.textContent !== tileNum || tileNum === 0) {
		tile9.style.backgroundColor = switchColor(tileNum);
		if (tileNum !== 0) {
			tile9.textContent = tileNum;
		} else {
			tile9.textContent = "";
		}
	}
	tileNum = gridTracker[2][1];
	if (tile10.textContent !== tileNum || tileNum === 0) {
		tile10.style.backgroundColor = switchColor(tileNum);
		if (tileNum !== 0) {
			tile10.textContent = tileNum;
		} else {
			tile10.textContent = "";
		}
	}
	tileNum = gridTracker[2][2];
	if (tile11.textContent !== tileNum || tileNum === 0) {
		tile11.style.backgroundColor = switchColor(tileNum);
		if (tileNum !== 0) {
			tile11.textContent = tileNum;
		} else {
			tile11.textContent = "";
		}
	}
	tileNum = gridTracker[2][3];
	if (tile12.textContent !== tileNum || tileNum === 0) {
		tile12.style.backgroundColor = switchColor(tileNum);
		if (tileNum !== 0) {
			tile12.textContent = tileNum;
		} else {
			tile12.textContent = "";
		}
	}

	tileNum = gridTracker[3][0];
	if (tile13.textContent !== tileNum || tileNum === 0) {
		tile13.style.backgroundColor = switchColor(tileNum);
		if (tileNum !== 0) {
			tile13.textContent = tileNum;
		} else {
			tile13.textContent = "";
		}
	}
	tileNum = gridTracker[3][1];
	if (tile14.textContent !== tileNum || tileNum === 0) {
		tile14.style.backgroundColor = switchColor(tileNum);
		if (tileNum !== 0) {
			tile14.textContent = tileNum;
		} else {
			tile14.textContent = "";
		}
	}
	tileNum = gridTracker[3][2];
	if (tile15.textContent !== tileNum || tileNum === 0) {
		tile15.style.backgroundColor = switchColor(tileNum);
		if (tileNum !== 0) {
			tile15.textContent = tileNum;
		} else {
			tile15.textContent = "";
		}
	}
	tileNum = gridTracker[3][3];
	if (tile16.textContent !== tileNum || tileNum === 0) {
		tile16.style.backgroundColor = switchColor(tileNum);
		if (tileNum !== 0) {
			tile16.textContent = tileNum;
		} else {
			tile16.textContent = "";
		}
	}
}
