let score = 0; //player score
let playing = true;

const btnStart = document.querySelector("btn__start");
const btnUp = document.querySelector("btn__up");
const btnDown = document.querySelector("btn__down");
const btnRight = document.querySelector("btn__right");
const btnLeft = document.querySelector("btn__left");

function startGame() {
	reset();
}

const reset = () => {
	score = 0;
	playing = true;
	score.textContent = "Score: 0";
	console.log("Game reset");
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
