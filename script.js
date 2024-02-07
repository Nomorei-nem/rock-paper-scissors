'use strict';

const results = { userWins: 0, ties: 0, computerWins: 0 };

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
	const gameWinnerEl = document.querySelector('.game-winner');

	if (playerSelection === computerSelection) {
		results.ties++;
		resultEl.innerHTML = `This round is a tie! Both players chose ${playerSelection}.`;
	}

	if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
		results.userWins++;
		resultEl.innerHTML = `You win! Rock beats Scissors!`;
	}

	if (playerSelection === 'Rock' && computerSelection === 'Paper') {
		results.computerWins++;
		resultEl.innerHTML = `You lose! Paper beats Rock!`;
	}

	if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
		results.userWins++;
		resultEl.innerHTML = `You win! Scissors beats Paper!`;
	}

	if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
		results.computerWins++;
		resultEl.innerHTML = `You lose! Rock beats Scissors!`;
	}

	if (playerSelection === 'Paper' && computerSelection === 'Rock') {
		results.userWins++;
		resultEl.innerHTML = `You win! Paper beats Rock!`;
	}

	if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
		results.computerWins++;
		resultEl.innerHTML = `You lose! Scissors beats Paper!`;
	}

	if (results.userWins === 5) {
		gameWinnerEl.innerHTML = `User is first to 5 points. User wins!`;
		results.userWins = results.ties = results.computerWins = 0;
	} else if (results.computerWins === 5) {
		gameWinnerEl.innerHTML = `CPU is first to 5 points. CPU wins!`;
		results.userWins = results.ties = results.computerWins = 0;
	} else gameWinnerEl.innerHTML = '';

	document.querySelector(
		'.overall-results'
	).innerText = `Player wins: ${results.userWins}\nTies: ${results.ties}\nCPU wins: ${results.computerWins}`;
}

const computerSelection = getComputerChoice();

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => playRound('Rock', getComputerChoice()));

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => playRound('Paper', getComputerChoice()));

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () =>
	playRound('Scissors', getComputerChoice())
);
