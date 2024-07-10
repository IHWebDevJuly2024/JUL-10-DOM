// ASYNC CODE
//console.log("this is BEFORE the timeout (out of it)");

// SET TIME OUT
/* setTimeout(() => {
  // We delay whatever is inside of the callback function
  console.log("Hellooo this is the set timeout");
}, 5000); */

// console.log("this is after the timeout (out of it)");

// SET INTERVAL

let counter = 0;

const myInterval = setInterval(() => {
  console.log("Counter: ", counter);
  counter++;

  if (counter > 500) {
    clearInterval(myInterval);
  }
}, 1); // the code runs every 1000 ms
