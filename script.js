// complete the JS code
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
	let score = scoreInput.value;
	localStorage.setItem("score",score);
  showScores();
}

// Show scores in div
function showScores() {
	let score = localStorage.getItem("score");
	scores.innerText = score;
  // complete the code
}
