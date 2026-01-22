let score = 0; //player score
let playing = true;

const btnStart = document.querySelector("btn__start");
const btnUp = document.querySelector("btn__up");
const btnDown = document.querySelector("btn__down");
const btnRight = document.querySelector("btn__right");
const btnLeft = document.querySelector("btn__left");

//create grid with all tiles initialized to 0 - no tiles
var gridTracker = [
	[0, 0, 0, 0],
	[0, 1, 0, 0],
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
	AddTile(2);
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
	let randomPos = Math.floor(Math.random() * emptySpaceCount) + 1;

	//Randomly generate 2 or 4
	let evenNum = Math.floor(Math.random() * 2) + 1;
	let tileNum = evenNum === 1 ? 2 : 4;

	let currentPos = 0;
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
