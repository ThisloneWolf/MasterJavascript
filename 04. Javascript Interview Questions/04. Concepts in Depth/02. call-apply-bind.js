/**
 * Call, Apply and Bind
 */

// Calling it with object which we need to have our own this keyword
const getName = {
  name: "Karan",
  friend: {
    name: "Madhav",
    greet: function (...args) {
      console.log(args);
      console.log(`${this.name} says hi !`);
    },
  },
};

getName.friend.greet.call({ name: "Krishna" });
getName.friend.greet.call({ name: "Arjun" }, 123, "karan", "madhav");

// The only difference b/w apply and call is that apply let you pass any array with arguments
// we have to supply an array as argumets in case of apply !!
getName.friend.greet.apply({ name: "Radha" }, [1, 2, 3]);

// Bind : It's give us a new function that is permanently bind with the object provided !

const boundGreet = getName.friend.greet.bind({ name: "Negi" });
console.log(boundGreet, typeof boundGreet);
boundGreet("Hi Panada");
