'use strict';

let playerSelection;

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

function playRound(playerSelection, computerSelection) {
	const resultEl = document.querySelector('.results');

	if (playerSelection === computerSelection)
		resultEl.textContent = `This round is a tie! Both players chose ${playerSelection}.`;

	if (playerSelection === 'Rock' && computerSelection === 'Scissors')
		resultEl.textContent = 'You win! Rock beats Scissors!';

	if (playerSelection === 'Rock' && computerSelection === 'Paper')
		resultEl.textContent = 'You lose! Paper beats Rock!';

	if (playerSelection === 'Scissors' && computerSelection === 'Paper')
		resultEl.textContent = 'You win! Scissors beats Paper!';

	if (playerSelection === 'Scissors' && computerSelection === 'Rock')
		resultEl.textContent = 'You lose! Rock beats Scissors!';

	if (playerSelection === 'Paper' && computerSelection === 'Rock')
		resultEl.textContent = 'You win! Paper beats Rock!';

	if (playerSelection === 'Paper' && computerSelection === 'Scissors')
		resultEl.textContent = 'You lose! Scissors beats Paper!';
}

const computerSelection = getComputerChoice();

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => playRound('Paper', getComputerChoice()));

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => playRound('Rock', getComputerChoice()));

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () =>
	playRound('Scissors', getComputerChoice())
);

const results = { userWins: 0, Ties: 0, computerWins: 0 };
