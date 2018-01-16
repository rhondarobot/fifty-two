function guessingGame(numberOfGuesses){
    let answer = Math.floor(Math.random() * 10);
    let guesses = 0;
    return function(guess) {
        guesses++;
        if (guesses > 0 && guesses < numberOfGuesses) {
            if (guess === answer) {
                return 'You got it!';
            }
            if (guess > answer) {
                return "You're too high!";
            }
            if (guess < answer) {
                return "You're too low!";
            }
        }
        else return 'You are all done playing!';
    };
}
