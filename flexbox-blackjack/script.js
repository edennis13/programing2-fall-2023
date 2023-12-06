let dcardSpace1 = document.getElementById("dcard1");
let dcardSpace2 = document.getElementById("dcard2");
let dcardSpace3 = document.getElementById("dcard3");
let dcardSpace4 = document.getElementById("dcard4");
let pcardSpace1 = document.getElementById("pcard1");
let pcardSpace2 = document.getElementById("pcard2");
let pcardSpace3 = document.getElementById("pcard3");
let pcardSpace4 = document.getElementById("pcard4");
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

let cardScoreValues = {
  '2H': 2, '3H': 3, '4H': 4, '5H': 5, '6H': 6, '7H': 7, '8H': 8, '9H': 9, '10H': 10, 'JH': 10, 'QH': 10, 'KH': 10, 'AH': 1,
  '2D': 2, '3D': 3, '4D': 4, '5D': 5, '6D': 6, '7D': 7, '8D': 8, '9D': 9, '10D': 10, 'JD': 10, 'QD': 10, 'KD': 10, 'AD': 1,
  '2C': 2, '3C': 3, '4C': 4, '5C': 5, '6C': 6, '7C': 7, '8C': 8, '9C': 9, '10C': 10, 'JC': 10, 'QC': 10, 'KC': 10, 'AC': 1,
  '2S': 2, '3S': 3, '4S': 4, '5S': 5, '6S': 6, '7S': 7, '8S': 8, '9S': 9, '10S': 10, 'JS': 10, 'QS': 10, 'KS': 10, 'AS': 1,
};

function drawCard(cardList){
	let randomNum = Math.floor(Math.random() * (cardList.length-1));
	const drawnCard = cardList.splice(randomNum, 1)[0];
	return drawnCard;
}


function reset(){
	// alert("you clicked reset");
	userCards = [];
	dealerCards = []
	//reset scores to 0
	userScore = 0;
	dealerScore = 0;
	// reset message
	infoBoxElement.innerText = "Your turn";
	// reset deck
	cardDeck = ['AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS'];

	// deal 2 cards (face up) to player

	let userCard1 = drawCard(cardDeck);
	let userCard2 = drawCard(cardDeck);
	userCards.push(userCard1);
	userCards.push(userCard2);


	// deal two cards (1 face up, 1 face down) to dealer

	let dealerCard1 = drawCard(cardDeck);
	let dealerCard2 = drawCard(cardDeck);
	dealerCards.push(dealerCard1);
	dealerCards.push(dealerCard2);

	console.log (userCards);
	console.log (dealerCards); 

	dcardSpace1.src = ("images/back.png");
	dcardSpace2.src = "images/" + dealerCard2 + ".svg";
	dcardSpace3.src = "images/blank.svg"
	dcardSpace4.src = "images/blank.svg" 

	pcardSpace1.src = "images/" + userCard1 + ".svg";
	pcardSpace2.src = "images/" + userCard2 + ".svg";
	pcardSpace3.src = "images/blank.svg"
	pcardSpace4.src = "images/blank.svg" 


	//calculate dealer score

	dealerScore = cardScoreValues[dealerCard1] + cardScoreValues[dealerCard2];

	//calculate user score
	userScore = cardScoreValues[userCard1] + cardScoreValues[userCard2];

	// update scores on the ui
	dealerScoreElement.innerText = "Dealer Score:" + "?" + "(" + dealerScore + ")";
	playerScoreElement.innerText = "Your Score:" + userScore;
	

	// enable hit and stand buttons

	hitButton.disabled = false;
	standButton.disabled = false;


	
}

function stand(){

	if (dealerCards.length < 4 && dealerScore <= 16){
		for (let i =0; i<10; i++){
			if(dealerCards.length == 2){
				let dealerCard3 = drawCard(cardDeck);
				dealerCards.push(dealerCard3);
				dealerScore =  dealerScore +  cardScoreValues[dealerCard3];
				// update UI card
				dcardSpace3.src = "images/" + dealerCard3 + ".svg";
				//update UI score
				dealerScoreElement.innerText = "Dealer Score:" + dealerScore;
		}
		else if (dealerCards.length == 3){
			let dealerCard4 = drawCard(cardDeck);
			dealerCards.push(dealerCard4);
			dealerScore =  dealerScore +  cardScoreValues[dealerCard4];
			// update UI card
			dcardSpace4.src = "images/" + dealerCard4 + ".svg";
			//update UI score
			dealerScoreElement.innerText = "Dealer Score:" + dealerScore;
		}
		}
		
	}

	else{
		hitButton.disabled = true;
		standButton.disabled = true;
			
	}



			if (userScore > 21){
				infoBoxElement.innerText = "You Bust!  Press Reset to play again.";
			}

			else if (dealerScore > 17 && userScore > dealerScore){
				infoBoxElement.innerText = "You Win!  Press Reset to play again.";
			}

			else if (userScore < dealerScore && dealerScore <22){
				infoBoxElement.innerText = "Dealer Wins!  Press Reset to play again.";
			}
			else if (userScore == 21 ){
				infoBoxElement.innerText = "You got BlackJack! You win!  Press Reset to play again.";
			}
			else if (dealerScore == 21 ){
				infoBoxElement.innerText = "The dealer got BlackJack! You lose!  Press Reset to play again.";
			}

			else{
					infoBoxElement.innerText = "Your turn";
			}
	
}

function hit(){
	// alert("you clicked hit");


	// draw card 
	if (userCards.length == 2){
		let userCard3 = drawCard(cardDeck);
		userCards.push(userCard3);
	// change score
		userScore =  userScore +  cardScoreValues[userCard3];
	// update UI card
		pcardSpace3.src = "images/" + userCard3 + ".svg";
	//update UI score
		playerScoreElement.innerText = "Your Score:" + userScore;
	}

	else if (userCards.length == 3){
		let userCard4 = drawCard(cardDeck);
		userCards.push(userCard4);
	// change score
		userScore =  userScore +  cardScoreValues[userCard4];
	// update UI card
		pcardSpace4.src = "images/" + userCard4 + ".svg";
	//update UI score
		playerScoreElement.innerText = "Your Score:" + userScore;
	}

	else{
		hitButton.disabled = true;
		standButton.disabled = true;
	}
}



			if (userScore > 21){
				infoBoxElement.innerText = "You Bust!  Press Reset to play again.";
			}

			else if (userScore > dealerScore){
				infoBoxElement.innerText = "You Win!  Press Reset to play again.";
			}

			else if (userScore < dealerScore){
				infoBoxElement.innerText = "Dealer Wins!  Press Reset to play again.";
			}

			else{
					infoBoxElement.innerText = "Your turn";
			}


// while (i == 0){
// 	i=0
// 	if (userScore >21){
// 		reset()
// 	}
// }



