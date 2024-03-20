/**
 * this keyword with function declaration
 */

function Hero(name) {
  this.name = name;
  this.greet = function () {
    console.log(this);
    console.log(`${this.name} says hi !`);
  };
}

const storm = new Hero("Negi");
console.log(storm);
storm.greet();
