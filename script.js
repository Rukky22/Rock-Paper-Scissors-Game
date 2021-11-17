'use strict';

// A simple paper, scissors and rock game

// Select the element for the project.
const ScoreEl = document.querySelector('.score_label');
const finalScoreEl = document.querySelector('.final_score');
// playerPlay() is use to get the choice of paper, rock or scissors from user.
const playerPlay = function () {
  let playerStatus = false;
  let playerSelection;

  while (!playerStatus) {
    playerSelection = prompt('Pick one among: rock, paper and scissors: ');
    playerSelection =
      playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase();
    if (
      playerSelection === 'Rock' ||
      playerSelection === 'Paper' ||
      playerSelection === 'Scissors'
    ) {
      playerStatus = true;
    }
  }
  return playerSelection;
};

// computerPlay is use to get the choice of rock, paper or scissors randomly from the computer.
const computerPlay = function () {
  let computerSelection;
  // compute the computerPlay() function
  // associate 1 for rock, 2 for paper and 3 for scissors
  const play = Math.trunc(Math.random() * 3) + 1;
  if (play === 1) computerSelection = 'Rock';
  else if (play === 2) computerSelection = 'Paper';
  else if (play === 3) computerSelection = 'Scissors';
  return computerSelection;
};

// // compute the playRound() function
const playRound = function () {
  let playerSelection = playerPlay();
  let computerSelection = computerPlay();
  // // Validate the condition for the player to win paper, rock or scissors
  // // 1) If rock and paper are selected, and I selected paper and computer selected rock, I win and computer lose. Else I lose
  let playerWinPaper = false;
  if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    playerWinPaper = true;
  }
  // // 2) if rock and scissors are selected, and I selected the rock and computer selected the scissors, I win. Else, I lose.
  let playerWinRock = false;
  if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    playerWinRock = true;
  }

  // // 3) if paper and scissors are selected, and I selected the scissors and computer selected the paper, I win. Else, I lose.
  let playerWinScissors = false;
  if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerWinScissors = true;
  }
  let playRoundResult;
  // provided I win scissors, rock or paper
  if (playerWinScissors || playerWinRock || playerWinPaper) {
    console.log(`You win! ${playerSelection} beat ${computerSelection}`);
    playRoundResult = 'Passed';
    // If player and computer select the same thing.
  } else if (playerSelection === computerSelection) {
    console.log(`Its a tie!`);
    playRoundResult = `Invalid game score, continue`;
    // If I lose
  } else if (!playerWinScissors || !playerWinRock || !playerWinPaper) {
    console.log(`You lost! ${computerSelection} beat ${playerSelection}`);
    playRoundResult = 'Failed';
  }
  return playRoundResult;
};

const game = function () {
  let gamePlaying = true;
  let gameCounter = 1;
  let gameScores = [0, 0];
  let gameFinalScores;

  while (gamePlaying) {
    console.log(`game ${gameCounter}`);

    let gameResult = playRound();
    if (gameResult === `Passed`) {
      gameScores[0] += 1;
    } else if (gameResult === `Failed`) {
      gameScores[1] += 1;
    }
    gameCounter++;
    if (gameCounter >= 6) gamePlaying = false;
  }
  if (gameScores[0] > gameScores[1])
    gameFinalScores = `👑 Oh my God! you've just saved the world. Yours score: Player: ${gameScores[0]} versus Computer: ${gameScores[1]}`;
  else if (gameScores[1] > gameScores[0])
    gameFinalScores = `😂 uh! you lost. Yours score: Player: ${gameScores[0]} versus Computer: ${gameScores[1]}`;
  else {
    gameFinalScores = `🧚 Its a tie! Try again. Yours score: Player: ${gameScores[0]} versus Computer: ${gameScores[1]}`;
  }
  console.log(gameFinalScores);
  finalScoreEl.textContent = `${gameFinalScores}`;
  return gameFinalScores;
};

// Play our game now!
game();
