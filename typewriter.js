const sentence = "hello there from lighthouse labs";

// asynchronous function to use Promise in for-loop
const type = async function(string) {
  // iterate through every character of input string
  for (const char of string) {
    // wait 50ms for every iteration
    await wait(50);
    // write each character of string
    process.stdout.write(char);
  }
  // add a new line after for-loop finishes
  process.stdout.write('\n');
};

// create a new promise which sets timeout for resolve with set time delay
const wait = delay => new Promise(resolve => setTimeout(resolve, delay));

// type(<any string>) will animate the input to be typewritten
type(sentence);