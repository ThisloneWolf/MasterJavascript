/**
 * this keyword - Dmitripavlutin
 * this is the context of the FUNCTION INVOCATION !!!!
 */

// Question - 1
function sum(a, b) {
  "use strict";
  console.log(this); // undefined in strict mode !
  return a * b;
}

sum();

// Question - 2
function add() {
  "use strict"; // once strict mode enabled it, will be avaliable inside nested functions too

  function getName() {
    console.log(this); // undefined
  }

  getName();
}

add();

// Question - 3 [ What will be this, and what will be printed on addition ]

const obj = {
  a: 5,
  b: 10,
  sum: function () {
    console.log(this); // object obj

    function calc() {
      console.log(this);
      return this.a + this.b; // NaN or Error
    }
    return calc(); // window
  },
};

obj.sum();

// Question - 4

const myName = Object.create({
  getName() {
    console.log(this);
    return this.name;
  },
});

myName.name = "Madhav";
myName.getName();

// Question - 5 [ Explain the working and output and How could have you resolve it ?]
function getUserName(name, sex) {
  this.name = name;
  this.sex = sex;

  this.logData = function () {
    console.log(this); // window obj or udnefined in strict mode
    console.log(this.name, this.sex); // TypeError in strict mode or undefined
  };
}

const myNames = new getUserName("Karan", "Male");

// Here it's acting like function invocation i.e const extractData = myCat.logData then setTimeout(extractData, 1000)
setTimeout(myNames.logData, 1000);

// Question - 6

class DemiGod {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  log() {
    console.log(this);

    setTimeout(() => {
      console.log(this); // { x: 90, y: 10 } i.e DemiGod Object
      console.log(this.x + this.y);
    }, 1000);
  }
}

const getGod = new DemiGod(90, 10);
getGod.log();
