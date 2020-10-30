// generates a random choise for computer
function computerPlay() {
    let options = ["rock", "paper", "scissor"];
    let computerSelection = Math.floor(Math.random() * options.length);
    return options[computerSelection];
  }
  
  // asks the user enter his choise
  function playerSelection() {
    let playerEnter = prompt('Enter "Rock", "Paper", or "Scissor').toLowerCase();
    return playerEnter;
  }
  
  function playRound(computerPlay, playerSelection) {
    console.log("Computer choise: " + computerPlay);
    console.log("Player choise: " + playerSelection);
    let result = 0;
    switch (computerPlay + playerSelection) {
      // player looses
      case "rockscissor":
      case "scissorpaper":
      case "paperrock":
        result = "You loose";
        break;
      // player wins
      case "rockpaper":
      case "paperscissor":
      case "scissorrock":
        result = "You win";
        break;
      // draw
      case "rockrock":
      case "paperpaper":
      case "scissorscissor":
        result = "Drawn!";
        break;
      default:
        alert("Please refresh the page and enter a valid option!");
    }
    return result;
  }
  
  function game() {
    var result = 0;
    var winsCount = 0;
    for (var playsCount = 1; playsCount <= 5; playsCount++) {
      console.log("Wins number: " + winsCount);
      result = playRound(computerPlay(), playerSelection());
      console.log(result);
      if (result == "You win") {
        winsCount++;
      }
      console.log('Plays Count: ' + playsCount);
  
      if (winsCount >= 3) {
        playsCount = 5;
        console.log("You win the best of 5");
      } else if (winsCount < 3 && playsCount == 5) {
        console.log("Computer win the best of 5");
      }
    }
  }
  
  game();