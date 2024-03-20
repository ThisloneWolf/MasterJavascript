/**
 * What the Heck is this keyword ?
 */

Object.prototype.greet = function greeting() {
  console.log(this);
  console.log(`${this.name} says hello !`);
};

const subject = {
  name: "Javascript",
};

subject.greet();

// Example - 2

const userName = {
  name: "Ram",
  getGreet: function () {
    console.log(this);
    console.log(`${this.name} says Hello`);
  },
  getThis: () => {
    console.log(this);
    console.log(`${this.name} says Hello`);
  },
};

userName.getGreet();
userName.getThis();

// Example - 3

const setUserName = {
  name: "Karan",
  friend: {
    greet: function () {
      console.log(`${this.name} says Hi`);
    },
  },
};

setUserName.friend.greet();
