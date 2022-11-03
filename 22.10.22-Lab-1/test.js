


let diceOne = Math.random() * 10;
let diceTwo = Math.random() * 10;

console.log(diceOne)
console.log(diceTwo)

if (diceOne > diceTwo)  {
    console.log("Player 1 wins");
}else if (diceOne < diceTwo)  {
    console.log("Player 2 wins");
}else  {
    console.log("Players Tie");
}

