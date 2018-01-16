# Closures

The main gist of closures is that there are inner functions and outer functions in one scope.  The inner function *can* get access to all of the variables and parameters of the outer function, but only if they declare them.

### closure-examples.js
The code examples in this file were extracted from the 'You Don't Know JS' series by Kyle Simpson.

The first `CoolModule()` contains an inner function `doSomething()` that logs the value for its constant `something`. 

It contains another inner function that performs a `join` method on its array that was set to the constant `another`.

`CoolModule()` then returns the variables of doSomething and doAnother which you can access via creating a new instance ( `const foo = CoolModule()` in this case) of the function and calling the function you wish to see the value of: ```foo.doSomething();```

******

The 2nd example is showing a loop using `let` vs `var`.  If you use `var` for your loop and timeout function, you will receive unexpected results: the number `6` will print out 5 times at the interval of 1 second.

Using `let` creates its own closure and prints out 0 - 4 at 1 second intervals, just like you thought it would when you used `var` (before knowing of the powers of `let`).

### multiply.js
This was a challenge to create a function named specialMultiply that takes in 2 parameters and returns their product. If only one parameter was passed through, create an inner function to pass the other parameter through and return the product via that function instead. 

I decided to use a ternary function to pull this off because we were only comparing two conditions. It's best practice to name your inner function for debugging purposes, but I didn't feel the need to in this case.

I tested my function like this:
```
const testing = specialMultiply(4);
testing(5); // 20
```
&&
```
const bothParameters = specialMultiply(6,4); // 24
```

### guessingGame.js
The guessing game was a little trickier. Challenge: create a guessingGame that takes in one parameter amount. The inner function must be returned from the outer function with a parameter called `guess`.  Create a variable answer that should be random and range from 0 - 10 *as well as* a variable named `guesses` that is set to `0`.

Give clues in the inner function as to whether the guess is too high, too low or matches the randomly generated answer (*defined in the outer function*). You should also stop the user from guessing if the amount of guesses they made is greater than the initial amount passed to the outer function. (Closure needed to solve this problem)

2 things I learned while *creating this game* were:
    
    1. `Math.floor()` *must* envelop `Math.random()` and not the other way around. I had it backwards and the numbers were still ranging from 0 - 1.
    
    2. The `guesses` counter was inside the `if statement` of the inner function and it would immediately return 'You are all done playing!' everytime.  I realized that in my code, I was counting too late and that my `guesses` count was always at zero, thus skipping the first `if statement` and going straight to the default string that wouldn't allow me to proceed in the game regardless of how many guesses I had set for myself.

How I tested my guessing game: 
```
const game1 = guessingGame(5); // where `5` would determine # of guesses
                               // before being told 'You are all done 
                               // playing!' 
game1(4); // Your guess in too high!
game1(0); // Your guess is too low!
game1(3); // Your guess is too high!
game1(2); // You got it!
game1(1); // You are done playing!
```

^ I did that multiple times to test it and it worked with no issues. 

### 🖖



