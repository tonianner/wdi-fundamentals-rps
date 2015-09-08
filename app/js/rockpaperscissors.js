////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'." + '\n');
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


 // Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `getInput()`.

function getPlayerMove(move) {
    return move || getInput();
}

// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    
function getComputerMove(move) {
    return move || randomPlay();
}

//we might write the expression x = x || 10;. If x has some 'truthy' value, the OR operator will evaluate to x, so it would be as if we wrote x = x. However, if x were null, the OR operator would evaluate to 10 (because null is 'falsey'). It's as if we've said "If x doesn't already have a value assigned, set it equal to 10". For that reason, this kind of operation is often called 'conditional assignment'.

//call function
getPlayerMove('rock');



// Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
// Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
// The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
//Use control flow to determine which value gets returned. HINT: the possible outcomes are either s'player' (if the player wins), 'computer' (if the computer wins), or 'tie' (if it's a draw).

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === "rock") 
    {switch (computerMove) 
        {case 'paper':
            winner = "computer";
            break;
            case 'scissors':
            winner = "player";
            break;
            case 'rock':
            winner = "tie";
            break;
            default:
            winner = 'wrong value';
        }
    } else if (playerMove === "paper") 
        {switch (computerMove) 
        {case 'paper':
            winner = "tie";
            break;
            case 'scissors':
            winner = "computer";
            break;
            case 'rock':
            winner = "player";
            break;
            default:
            winner = 'wrong value';
        }
    } else if (playerMove === "scissors") 
        {switch (computerMove) 
        {case 'paper':
            winner = "player";
            break;
            case 'scissors':
            winner = "tie";
            break;
            case 'rock':
            winner = "computer";
            break;
            default:
            winner = 'wrong value';
        }
    }

    return winner;
} 

//call function
getWinner();


function playToFive() {
  console.log('Let\'s play Rock Paper Scissors\n');
  var playerWins = 0;
  var computerWins = 0;
  var wins = 5;
  
  // This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.
  var winner = getWinner(playerWins, computerWins);
    while (playerWins < wins && computerWins < wins) {
        var computerMove = getComputerMove();
        var playerMove = getPlayerMove();

         winner = getWinner(playerMove, computerMove);
             if (winner === 'player') {
                playerWins ++;
            } else if (winner === 'computer') {
                computerWins ++;
            } else if (winner === 'tie') {
                playerWins += 0;
                computerWins += 0;
                console.log('\n IT\'S A TIE, TRY AGAIN \n');
            } else if (playerMove != 'rock' || playerMove != 'scissors' || playerMove != 'paper') {
        console.log('\n ERROR! Wrong Input \n')
            }
  
// After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.

    console.log('Player chose: ' + playerMove + '\n'
            + 'Computer chose: ' + computerMove + '\n'
            + 'Score: Player ' + playerWins 
            + ', Computer ' +  computerWins +  '\n');
    
}

 console.log('Total Score: Player ' + playerWins 
            + ', Computer: ' + computerWins +  '\n' 
            + 'THE WINNER IS \'' + winner + '\''
            +'\n CONGRATULATIONS!');
    return [playerWins,computerWins];
}
//call function
playToFive();



