const maxNumber=200;
const minNumber=1;
const target=Math.floor(Math.random()*(maxNumber-minNumber+1)+minNumber);
let attempt=0;
let guess;
let running=true;
while (running ==true){
    guess=window.prompt("Guess a number between " +minNumber+" and "+maxNumber);
    guess=Number(guess);
    if (isNaN(guess)){
        window.alert("Please enter a valid number.");
    }
    else if (guess < minNumber || guess > maxNumber) {
        window.alert("Please enter a number between " + minNumber + " and " + maxNumber + ".");
    } else {
        attempt++;
        if (guess < target) {
            window.alert("Too low! Try again.");
        } else if (guess > target) {
            window.alert("Too high! Try again.");
        } else {
            window.alert("Congratulations! You've guessed the number " + target + " in " + attempt + " attempts.");
            running = false;
        }
    }
}
