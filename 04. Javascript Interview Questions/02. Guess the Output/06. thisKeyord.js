/**
 * This keyword
 */

// Question - 01

class getName {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  log() {
    console.log(this); // point to { x: 10, y: 10 } i.e getName Object
    setTimeout(function exec() {
      console.log(this); // since this is the functional type, it's this will be window object or undefined in strict mode
    }, 1000);
  }
}

const user = new getName(10, 10);
// user.log();

/**
 * Arrow function is bound with the lexical "this" ONCE and FOREVER.
 * "This" cannot be modified even when using the context modification methods
 */

// Question - 2
function abc() {
  const arrowFunc = () => {
    console.log(this, "Arrow function bind to lexical scope FOREVER"); // { name: 'Karan' love: 'panda' }
  };
  arrowFunc();

  // We are again trying modifying "this"
  arrowFunc.call({ name: "Negi", love: "Madhav" });
  arrowFunc.apply({ name: "Abu", friend: "No-body" });
}
abc.call({ name: "karan", love: "Krishna" });

// Pitfall defining while arrow functions

// Question - 3 [ Guess the output and Solve the return value Expression !]

function Time(hours, minutes) {
  (this.hours = hours), (this.minutes = minutes);
}

Time.prototype.format = () => {
  console.log(this, "Time Period"); // Window object, as defined globally
  return this.hours + this.minutes; // NaN
};

const getTime = new Time(10, 10);
getTime.format();
