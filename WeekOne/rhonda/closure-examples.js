// examples found on You Don't Know JS by Kyle Simpson (https://github.com/getify/You-Dont-Know-JS)

/*** example of a closure which are common in Modules -- referred to as a "Revealing Module" ***/
function CoolModule() {
  const something = "cool";
  const another = [1,2,3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join('!')); // array method
  }

  return {
    doSomething,
    doAnother
  };
}

const foo = CoolModule(); // creates an instance of CoolModule()

foo.doSomething(); // cool
foo.doAnother(); // 1!2!3


/*** example of closures in loops (let vs var)***/

 /**************************************************************************
 **showing var first with result **do not use var -  for comparison only**
for(var i = 0; i < 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i*1000);
} // returns 6 printed out 5 times at an interval of 1 second because it's missing closured scope
****************************************************************************/


// using let to create closure per instance of i
for(let i = 0; i < 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i*1000);
} // prints out 0 - 4 at 1 second intervals, like expected




