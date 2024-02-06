'use strict';

const getComputerChoice = function () {
	const random = Math.trunc(Math.random() * 3 + 1);

	switch (random) {
		case 1:
			return 'Paper';
			break;
		case 2:
			return 'Rock';
			break;
		case 3:
			return 'Scissors';
			break;
	}
};

const playRound = function (playerSelection, computerSelection) {
	const playerChoice = playerSelection
		.toLowerCase()
		.replace(playerSelection[0], playerSelection[0].toUpperCase());

	const computerChoice = computerSelection;

	if (playerChoice === computerChoice)
		return `This round is a tie! Both players chose ${playerChoice}.`;

	if (playerChoice === 'Rock' && computerChoice === 'Scissors')
		return 'You win! Rock beats Scissors!';

	if (playerChoice === 'Rock' && computerChoice === 'Paper')
		return 'You lose! Paper beats Rock!';

	if (playerChoice === 'Scissors' && computerChoice === 'Paper')
		return 'You win! Scissors beats Paper!';

	if (playerChoice === 'Scissors' && computerChoice === 'Rock')
		return 'You lose! Rock beats Scissors!';

	if (playerChoice === 'Paper' && computerChoice === 'Rock')
		return 'You win! Paper beats Rock!';

	if (playerChoice === 'Paper' && computerChoice === 'Scissors')
		return 'You lose! Scissors beats Paper!';
};

const playerSelection = prompt("Let's play Paper Rock Scissors. Pick one!");
const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));

const playGame = function () {
	for (let i = 0; i < 5; i++) {
		console.log(playRound(playerSelection, getComputerChoice(), i));
	}
};

playGame();
