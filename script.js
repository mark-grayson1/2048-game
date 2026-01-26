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
const scoreDisplay = document.querySelector(".score-display");

const startInstructions = document.querySelector(".instructions");

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

const startGame = () => {
	reset();
};

const reset = () => {
	score = 0;
	playing = true;
	scoreDisplay.textContent = "Score: 0";
	resetGrid();
	console.log("grid reset", gridTracker);
	addTiles(2);
	updateGridDisplay();
};

const updateScore = (points) => {
	score = score + points;
	scoreDisplay.textContent = `Score: ${score}`;
	console.log("Score: ", score);
};

const removeColumnGaps = (direction) => {
	let columnArray1 = [];
	let columnArray2 = [];
	let columnArray3 = [];
	let columnArray4 = [];

	let currentNumber = 0;

	//store numbers > 0 into  4 columns without gaps
	if (direction === downDirection) {
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
	} else {
		for (let row = gridTracker.length - 1; row >= 0; row--) {
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
	}

	resetGrid();
	//copy column contents to grid starting at the relevant row to stack numbers
	// either upwards or downwards
	//store numbers > 0 into  4 columns without gaps

	if (direction === downDirection) {
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
	} else {
		for (let column = 0; column < gridTracker.length; column++) {
			let numberToPop = 0;
			let row = 0;
			let numOfElements = 0;
			switch (column) {
				case 0:
					numOfElements = 0;
					numberToPop = columnArray1.length;
					for (let i = 0; i < numberToPop; i++) {
						currentNumber = columnArray1.pop();
						numOfElements++;
						console.log("columnArray1 popped", numOfElements);
						row = numOfElements - 1;
						gridTracker[row][column] = currentNumber;
					}
					break;
				case 1:
					numOfElements = 0;
					numberToPop = columnArray2.length;
					for (let i = 0; i < numberToPop; i++) {
						currentNumber = columnArray2.pop();
						numOfElements++;
						console.log("columnArray2 popped", numOfElements);
						row = numOfElements - 1;
						gridTracker[row][column] = currentNumber;
					}
					break;
				case 2:
					numOfElements = 0;
					numberToPop = columnArray3.length;
					for (let i = 0; i < numberToPop; i++) {
						currentNumber = columnArray3.pop();
						numOfElements++;
						console.log("columnArray3 popped", numOfElements);
						row = numOfElements - 1;
						gridTracker[row][column] = currentNumber;
					}
					break;
				case 3:
					numOfElements = 0;
					numberToPop = columnArray4.length;
					for (let i = 0; i < numberToPop; i++) {
						currentNumber = columnArray4.pop();
						numOfElements++;
						console.log("columnArray4 popped", numOfElements);
						row = numOfElements - 1;
						gridTracker[row][column] = currentNumber;
					}
					break;

				default:
					break;
			}
		}
	}
};

const removeRowGaps = (direction) => {
	let rowArray1 = [];
	let rowArray2 = [];
	let rowArray3 = [];
	let rowArray4 = [];

	let currentNumber = 0;

	//store numbers > 0 into  4 columns without gaps
	if (direction === rightDirection) {
		for (let row = 0; row < gridTracker.length; row++) {
			for (let column = 0; column < gridTracker.length; column++) {
				currentNumber = gridTracker[row][column];
				if (currentNumber !== 0) {
					switch (row) {
						case 0:
							rowArray1.push(currentNumber);
							console.log("rowArray1.push");
							break;
						case 1:
							rowArray2.push(currentNumber);
							console.log("rowArray2.push");
							break;
						case 2:
							rowArray3.push(currentNumber);
							console.log("rowArray3.push");
							break;
						case 3:
							rowArray4.push(currentNumber);
							console.log("rowArray4.push");
							break;

						default:
							break;
					}
				}
			}
		}
	} else {
		for (let row = 0; row < gridTracker.length; row++) {
			for (let column = gridTracker.length - 1; column >= 0; column--) {
				currentNumber = gridTracker[row][column];
				if (currentNumber !== 0) {
					switch (row) {
						case 0:
							rowArray1.push(currentNumber);
							console.log("rowArray1.push");
							break;
						case 1:
							rowArray2.push(currentNumber);
							console.log("rowArray2.push");
							break;
						case 2:
							rowArray3.push(currentNumber);
							console.log("rowArray3.push");
							break;
						case 3:
							rowArray4.push(currentNumber);
							console.log("rowArray4.push");
							break;

						default:
							break;
					}
				}
			}
		}
	}

	resetGrid();
	//copy row contents to grid starting at the relevant row to add numbers
	// either right or left
	//store numbers > 0 into  4 rows without gaps

	if (direction === rightDirection) {
		for (let row = 0; row < gridTracker.length; row++) {
			let numberToPop = 0;
			let column = 0;
			let numOfElements = 0;
			switch (row) {
				case 0:
					numOfElements = 0;
					numberToPop = rowArray1.length;
					for (let i = numberToPop; i > 0; i--) {
						currentNumber = rowArray1.pop();
						numOfElements++;
						console.log("rowArray1 popped", numOfElements);
						column = gridTracker.length - numOfElements;
						gridTracker[row][column] = currentNumber;
					}
					break;
				case 1:
					numOfElements = 0;
					numberToPop = rowArray2.length;
					for (let i = numberToPop; i > 0; i--) {
						currentNumber = rowArray2.pop();
						numOfElements++;
						console.log("rowArray2 popped", numOfElements);
						column = gridTracker.length - numOfElements;
						gridTracker[row][column] = currentNumber;
					}
					break;
				case 2:
					numOfElements = 0;
					numberToPop = rowArray3.length;
					for (let i = numberToPop; i > 0; i--) {
						currentNumber = rowArray3.pop();
						numOfElements++;
						console.log("rowArray3 popped", numOfElements);
						column = gridTracker.length - numOfElements;
						gridTracker[row][column] = currentNumber;
					}
					break;
				case 3:
					numOfElements = 0;
					numberToPop = rowArray4.length;
					for (let i = numberToPop; i > 0; i--) {
						currentNumber = rowArray4.pop();
						numOfElements++;
						console.log("rowArray4 popped", numOfElements);
						column = gridTracker.length - numOfElements;
						gridTracker[row][column] = currentNumber;
					}
					break;

				default:
					break;
			}
		}
	} else {
		for (let row = 0; row < gridTracker.length; row++) {
			let numberToPop = 0;
			let column = 0;
			let numOfElements = 0;
			switch (row) {
				case 0:
					numOfElements = 0;
					numberToPop = rowArray1.length;
					for (let i = numberToPop; i > 0; i--) {
						currentNumber = rowArray1.pop();
						numOfElements++;
						console.log("rowArray1 popped", numOfElements);
						column = numOfElements - 1;
						gridTracker[row][column] = currentNumber;
					}
					break;
				case 1:
					numOfElements = 0;
					numberToPop = rowArray2.length;
					for (let i = numberToPop; i > 0; i--) {
						currentNumber = rowArray2.pop();
						numOfElements++;
						console.log("rowArray2 popped", numOfElements);
						column = numOfElements - 1;
						gridTracker[row][column] = currentNumber;
					}
					break;
				case 2:
					numOfElements = 0;
					numberToPop = rowArray3.length;
					for (let i = numberToPop; i > 0; i--) {
						currentNumber = rowArray3.pop();
						numOfElements++;
						console.log("rowArray3 popped", numOfElements);
						column = numOfElements - 1;
						gridTracker[row][column] = currentNumber;
					}
					break;
				case 3:
					numOfElements = 0;
					numberToPop = rowArray4.length;
					for (let i = numberToPop; i > 0; i--) {
						currentNumber = rowArray4.pop();
						numOfElements++;
						console.log("rowArray4 popped", numOfElements);
						column = numOfElements - 1;
						gridTracker[row][column] = currentNumber;
					}
					break;

				default:
					break;
			}
		}
	}
};

const removeGaps = (direction) => {
	switch (direction) {
		case downDirection:
			gaps = removeColumnGaps(downDirection);
			break;
		case upDirection:
			gaps = removeColumnGaps(upDirection);
			console.log("gaps = removeColumnGaps(upDirection)");
			break;
		case rightDirection:
			gaps = removeRowGaps(rightDirection);
			console.log("gaps = removeRowGaps(rightDirection)");
			break;
		case leftDirection:
			gaps = removeRowGaps(leftDirection);
			console.log("gaps = removeRowGaps(leftDirection)");
			break;

		default:
			break;
	}
};

const mergeColumnNumbers = (direction, column) => {
	let mergeNumber = 0;
	let row = 0;
	if (direction === downDirection) {
		while (row < gridTracker.length - 1) {
			mergeNumber = 0;
			let firstNumber = gridTracker[row][column];
			let secondNumber = gridTracker[row + 1][column];

			if (firstNumber === secondNumber && firstNumber !== 0) {
				mergeNumber++;
				gridTracker[row][column] = 0;
				gridTracker[row + 1][column] = firstNumber + secondNumber;
				updateScore(firstNumber + secondNumber);
			}

			if (mergeNumber === 0) {
				row++;
			} else if (mergeNumber > 0) {
				row += 2; // skip row avoid cumulative merge
			}
		}
	} else {
		row = gridTracker.length - 1;
		while (row > 0) {
			mergeNumber = 0;
			let firstNumber = gridTracker[row][column];
			let secondNumber = gridTracker[row - 1][column];

			if (firstNumber === secondNumber && firstNumber !== 0) {
				mergeNumber++;
				gridTracker[row][column] = 0;
				gridTracker[row - 1][column] = firstNumber + secondNumber;
				updateScore(firstNumber + secondNumber);
			}

			if (mergeNumber === 0) {
				row--;
			} else {
				row -= 2; // skip row avoid cumulative merge
			}
		}
	}
	//fill gaps in Columns from any merges
	if (mergeNumber > 0) {
		console.log("removeGaps called in mergeColumnNumbers");
		removeGaps(direction);
	}

	return mergeNumber;
};

const mergeRowNumbers = (direction, row) => {
	let mergeNumber = 0;
	let column = 0;
	if (direction === rightDirection) {
		while (column < gridTracker.length - 1) {
			mergeNumber = 0;
			let firstNumber = gridTracker[row][column];
			let secondNumber = gridTracker[row][column + 1];

			if (firstNumber === secondNumber && firstNumber !== 0) {
				mergeNumber++;
				gridTracker[row][column] = 0;
				gridTracker[row][column + 1] = firstNumber + secondNumber;
				updateScore(firstNumber + secondNumber);
			}

			if (mergeNumber === 0) {
				column++;
			} else if (mergeNumber > 0) {
				column += 2; // skip row avoid cumulative merge
			}
		}
	} else {
		column = gridTracker.length - 1;
		while (column > 0) {
			mergeNumber = 0;
			let firstNumber = gridTracker[row][column];
			let secondNumber = gridTracker[row][column - 1];

			if (firstNumber === secondNumber && firstNumber !== 0) {
				mergeNumber++;
				gridTracker[row][column] = 0;
				gridTracker[row][column - 1] = firstNumber + secondNumber;
				updateScore(firstNumber + secondNumber);
			}

			if (mergeNumber === 0) {
				column--;
			} else if (mergeNumber > 0) {
				column -= 2; // skip row avoid cumulative merge
			}
		}
	}

	//fill gaps in rows from any merges
	if (mergeNumber > 0) {
		console.log("removeGaps called in mergeColumnNumbers");
		removeGaps(direction);
	}

	return mergeNumber;
};

function hasGapsInColumn(direction) {
	let column1HasNumber = false;
	let column2HasNumber = false;
	let column3HasNumber = false;
	let column4HasNumber = false;
	let gaps = false;

	if (direction === downDirection) {
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
	} else {
		for (let row = gridTracker.length - 1; row >= 0; row--) {
			for (let column = 0; column < gridTracker.length; column++) {
				console.log(
					"for UP position in grid looking for gaps",
					row,
					column,
				);
				switch (column) {
					case 0:
						if (gridTracker[row][column] > 0) {
							column1HasNumber = true;
							console.log("column1HasNumber = true;");
						} else {
							if (column1HasNumber) {
								gaps = true;
								console.log("column1HasNumber gaps = true;");
							}
						}
						break;
					case 1:
						if (gridTracker[row][column] > 0) {
							column2HasNumber = true;
							console.log("column2HasNumber = true;");
						} else {
							if (column2HasNumber) {
								gaps = true;
								console.log("column2HasNumber gaps = true;");
							}
						}
						break;
					case 2:
						if (gridTracker[row][column] > 0) {
							column3HasNumber = true;
							console.log("column3HasNumber = true;");
						} else {
							if (column3HasNumber) {
								gaps = true;
								console.log("column3HasNumber gaps = true;");
							}
						}
						break;
					case 3:
						if (gridTracker[row][column] > 0) {
							column4HasNumber = true;
							console.log("column4HasNumber = true;");
						} else {
							console.log("column4HasNumber has gap");
							if (column4HasNumber) {
								gaps = true;
								console.log("column4HasNumber gaps = true;");
							}
						}
						break;
					default:
						break;
				}
			}
		}
	}

	return gaps;
}

function hasGapsInRow(direction) {
	let row1HasNumber = false;
	let row2HasNumber = false;
	let row3HasNumber = false;
	let row4HasNumber = false;
	let gaps = false;

	if (direction === rightDirection) {
		for (let row = 0; row < gridTracker.length; row++) {
			for (let column = 0; column < gridTracker.length; column++) {
				switch (row) {
					case 0:
						if (gridTracker[row][column] > 0) {
							row1HasNumber = true;
						} else {
							if (row1HasNumber) gaps = true;
						}
						break;
					case 1:
						if (gridTracker[row][column] > 0) {
							row2HasNumber = true;
						} else {
							if (row2HasNumber) gaps = true;
						}
						break;
					case 2:
						if (gridTracker[row][column] > 0) {
							row3HasNumber = true;
						} else {
							if (row3HasNumber) gaps = true;
						}
						break;
					case 3:
						if (gridTracker[row][column] > 0) {
							row4HasNumber = true;
						} else {
							if (row4HasNumber) gaps = true;
						}
						break;
					default:
						break;
				}
			}
		}
	} else {
		for (let row = 0; row < gridTracker.length; row++) {
			for (let column = gridTracker.length; column >= 0; column--) {
				switch (row) {
					case 0:
						if (gridTracker[row][column] > 0) {
							row1HasNumber = true;
						} else {
							if (row1HasNumber) gaps = true;
						}
						break;
					case 1:
						if (gridTracker[row][column] > 0) {
							row2HasNumber = true;
						} else {
							if (row2HasNumber) gaps = true;
						}
						break;
					case 2:
						if (gridTracker[row][column] > 0) {
							row3HasNumber = true;
						} else {
							if (row3HasNumber) gaps = true;
						}
						break;
					case 3:
						if (gridTracker[row][column] > 0) {
							row4HasNumber = true;
						} else {
							if (row4HasNumber) gaps = true;
						}
						break;
					default:
						break;
				}
			}
		}
	}

	return gaps;
}

function hasGaps(direction) {
	let gaps = false;

	switch (direction) {
		case downDirection:
			gaps = hasGapsInColumn(downDirection);
			break;
		case upDirection:
			gaps = hasGapsInColumn(upDirection);
			break;
		case rightDirection:
			gaps = hasGapsInRow(rightDirection);
			break;
		case leftDirection:
			gaps = hasGapsInRow(leftDirection);
			break;

		default:
			break;
	}
	return gaps;
}

// merge required if 2 consecutive numbers in same column - any gaps already removed
function columnMergeRequired(direction) {
	let firstNumber = -1;
	let secondNumber = -1;

	if ((direction = downDirection)) {
		for (let row = 0; row < gridTracker.length; row++) {
			for (let column = 0; column < gridTracker.length; column++) {
				firstNumber = gridTracker[row][column];
				if (row < gridTracker.length - 1 && firstNumber > 0) {
					secondNumber = gridTracker[row + 1][column];
					if (firstNumber === secondNumber) return true;
				}
			}
		}
	} else {
		for (let row = gridTracker.length; row > 0; row--) {
			for (let column = 0; column < gridTracker.length; column++) {
				firstNumber = gridTracker[row][column];
				if (row > 0 && firstNumber > 0) {
					secondNumber = gridTracker[row - 1][column];
					if (firstNumber === secondNumber) return true;
				}
			}
		}
	}

	return false;
}

function rowMergeRequired(direction) {
	let firstNumber = -1;
	let secondNumber = -1;

	if ((direction = rightDirection)) {
		for (let row = 0; row < gridTracker.length; row++) {
			for (let column = 0; column < gridTracker.length; column++) {
				firstNumber = gridTracker[row][column];
				if (column < gridTracker.length - 1 && firstNumber > 0) {
					secondNumber = gridTracker[row][column + 1];
					if (firstNumber === secondNumber) return true;
				}
			}
		}
	} else {
		for (let row = 0; row < gridTracker.length; row++) {
			for (let column = gridTracker.length - 1; column > 0; column--) {
				firstNumber = gridTracker[row][column];
				if (column > 0 && firstNumber > 0) {
					secondNumber = gridTracker[row][column - 1];
					if (firstNumber === secondNumber) return true;
				}
			}
		}
	}

	return false;
}

// check if there are still gaps
const isGridFull = () => {
	for (let row = 0; row < gridTracker.length; row++) {
		for (let column = 0; column < gridTracker.length; column++) {
			if (gridTracker[row][column] === 0) {
				return false;
			}
		}
	}
	return true;
};

const noAdjacentNumbers = () => {
	return (
		!rowMergeRequired(rightDirection) && !columnMergeRequired(downDirection)
	);
};

const isGameOver = () => {
	return isGridFull() && noAdjacentNumbers();
};

function moveTiles(direction) {
	//console.log("gridTracker before merge column numbers", gridTracker);

	let tileMoved = false;
	let numbersMerged = false;

	if (hasGaps(direction)) {
		tileMoved = true;
		console.log("hasGaps is true");
		removeGaps(direction);
		console.log("removeGaps called in moveTiles");
	}

	if (direction === upDirection || direction == downDirection) {
		if (columnMergeRequired()) {
			for (let column = 0; column < gridTracker.length; column++) {
				mergeColumnNumbers(direction, column) > 0;
				numbersMerged = true;
			}
			console.log("numbersMerged is", numbersMerged);
		}
	} else {
		if (rowMergeRequired()) {
			console.log("rowMergeRequired");
			for (let row = 0; row < gridTracker.length; row++) {
				mergeRowNumbers(direction, row) > 0;
				numbersMerged = true;
			}
			console.log("numbersMerged is", numbersMerged);
		}
	}

	//only add a tile if existing tiles have moved
	if (tileMoved || numbersMerged) {
		addTiles(1);
		updateGridDisplay();
		if (isGameOver()) {
			alert("Game over!");
		}
	}

	updateGridDisplay();
}

const moveTilesDown = () => {
	if (playing) moveTiles(downDirection);
};

const moveTilesUp = () => {
	if (playing) moveTiles(upDirection);
};

const moveTilesRight = () => {
	if (playing) moveTiles(rightDirection);
};

const moveTilesLeft = () => {
	if (playing) moveTiles(leftDirection);
};

// EventListeners for arrow keys
window.addEventListener("keyup", (event) => {
	switch (event.key) {
		case "ArrowLeft":
			if (playing) moveTiles(leftDirection);
			break;
		case "ArrowUp":
			if (playing) moveTiles(upDirection);
			break;
		case "ArrowRight":
			if (playing) moveTiles(rightDirection);
			break;
		case "ArrowDown":
			if (playing) moveTiles(downDirection);
			break;
		case " ":
			startGame();
			startInstructions.textContent = "";
			break;

		default:
			break;
	}
});

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

const switchColor = (tileNumber) => {
	let color = "#beige";

	switch (tileNumber) {
		case 2:
			color = "#458b8b";
			break;
		case 4:
			color = "gray";
			break;
		case 8:
			color = "orange";
			break;
		case 16:
			color = "indigo";
			break;
		case 32:
			color = "red";
			break;
		case 64:
			color = "blue";
			break;
		case 128:
			color = "green";
			break;
		case 256:
			color = "pink";
			break;
		case 512:
			color = "violet";
			break;
		case 1024:
			color = "silver";
			break;
		case 2048:
			color = "maroon";
			break;
		case 4096:
			color = "fuchsia";
			break;
		case 8192:
			color = "olive";
			break;
		case 16384:
			color = "navy";
			break;
		case 32768:
			color = "teal";
			break;
		case 65536:
			color = "aliceblue";
			break;
		case 131072:
			color = "antiquewhite";
			break;
		default:
			color = "beige";
			break;
	}

	return color;
};

const updateGridDisplay = () => {
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
};
