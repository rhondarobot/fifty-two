# Async/Await and Asynchronous GoLang.

My goal for this week is to write about Asynchronous Javascript and GoLang.  Concurrency is a big part of development in that we can pull data while our event loop is running other processes. 

## Async/Await - Javascript

This one was a long time coming, before this, Javascript had a few different methods for receiving code non-synchronously.  One was the Callback method, which lead to some pretty filthy code.  The other option was to use a promise, which is in effect still what we're using with Async/Await

Understanding the Javascript [Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop), we know that javascript generates a "Que" in which we store our functions and the order that they shall be ran in.  This is great for synchronous functionality, input/output!  But, we want to be able to run anything we want at any given time, on our time schedule.  The way to handle this by asynchronously calling the data.  What we then know, is that data will be asked for, but when that data comes back, it needs instructions on how that data will continue to process!  This is where we enter with Async/Await functionality!

There are ways(que the web worker) to run many JS runtimes at the same time and have them communicate with eachother; however, for basics we'll work specifically with Async/Await, but first we need to understand some concepts

### Promises

[Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) were the first real attempt to create guidelines for Asynchronous Javascript.  The goal was to create three states that an asynchronous operation could run in: Resolved, Pending, Failure.  Either way there was a completion of the promise, whether it was resolution or failure, and that value was returned.  These could returned as thenables using the `.then` method.

Typical Promise Pattern:

```Javascript
const blue = true;
const blue = new Promise(function(resolve, reject) {
    if (blue) {
        return resolve('It\'s True!');
    }
    reject('blue does not appear to be true')
})

blue.then((res) => {
      return res; // It's True!
  })
```

With Async/Await we can actually pull asyncrhonous code and give it a fun look:
### GoLang Goroutines

[Goroutines](https://tour.golang.org/concurrency/1) are the primary method of concurrency in Golang.  It provides a super light thread for you to run a function, and even return that function back using [channels](https://tour.golang.org/concurrency/2).