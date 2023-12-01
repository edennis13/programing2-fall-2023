let dcardSpace1 = document.getElementById("dcard1");
let dcardSpace2 = document.getElementById("dcard2");
let dcardSpace3 = document.getElementById("dcard3");
let dcardSpace4 = document.getElementById("dcard4");
let pcardSpace1 = document.getElementById("pcard1");
let pcardSpace2 = document.getElementById("pcard1");
let pcardSpace3 = document.getElementById("pcard1");
let pcardSpace4 = document.getElementById("pcard1");
let playerScoreElement = document.getElementById("playerScore");
let dealerScoreElement = document.getElementById("dealerScore");
let hitButton = document.getElementById("hit");
let standButton = document.getElementById("stand");
let resetButton = document.getElementById("reset");
let infoBoxElement = document.getElementById("info-box");

let userScore = 0;
let dealerScore = 0;
let cardDeck  = [];
let userCards = [];
let dealerCards = [];



function reset(){
	// alert("you clicked reset");

	//reset scores to 0
	userScore = 0;
	dealerScore = 0;
	// reset message
	infoBoxElement.innerText = "Your turn";
	// reset deck
	cardDeck = ['AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS'];

	// deal 2 cards (face up) to player

	// deal two cards (1 face up, 1 face down) to dealer

	//calculate dealer score

	//calculate user score

	// update scores on the ui

	// 
}

function stand(){
	alert("you clicked stand");
}

function hit(){
	alert("you clicked hit");
}





