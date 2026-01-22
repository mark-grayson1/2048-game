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
	AddTile(2);
	UpdateDisplay();
};

function moveTilesDown() {
	alert("down button works");
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
	console.log("randomPos", randomPos);

	//Randomly generate 2 or 4
	let evenNum = Math.floor(Math.random() * 2) + 1;
	let tileNum = evenNum === 1 ? 2 : 4;

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

//CHECK IF SIMPLER WAY TO RESET THE GRID
function resetGrid() {
	for (let row = 0; row < gridTracker.length; row++) {
		for (let column = 0; column < gridTracker.length; column++) {
			gridTracker[row][column] = 0;
		}
	}
}

function updateGridDisplay() {}

// Adds a randomly generated tile of 2 or 4
function AddTile(quantity) {
	for (let index = 1; index <= quantity; index++) {
		fillRandomVacantPosition();
		updateGridDisplay();
	}
}

function switchColor(tileNumber) {
	console.log("in switchColor", tileNumber);
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

function UpdateDisplay() {
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
