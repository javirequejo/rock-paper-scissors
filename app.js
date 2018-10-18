let defeated = {
  rock: 'paper',
  paper: 'scissors',
  scissors: 'rock'
};

function compare (moveA, moveB) {
  if (moveA === moveB) {
    console.log("Tie");
  }
  else if (defeated[moveB] === moveA) {
    console.log("A wins");
  }
  else if (defeated[moveA] === moveB) {
    console.log("B wins");
  }
  else {
    throw new Error ("Unexpected move");
  }
}

