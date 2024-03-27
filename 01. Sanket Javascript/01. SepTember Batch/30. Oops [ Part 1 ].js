/**
 * Oops In Javascript
 * Classes - Blueprints
 * Objects - Real Instances
 */

class Product {
  // constructor function: To create a new real life instances called as OBJECTS.
  // When we create an object, this will be called first and foremost.
  data = true; // this will also be a data member
  constructor(name, price) {
    // data members
    console.log("constructor called with: ", this);
    this.name = name;
    this.price = price;
    this.sayMyName = function () {
      console.log("Member Function");
    };
    console.log("Final this: ", this);
  }

  // member function
  displayProduct() {
    console.log(this.price);
  }

  // member fucntion
  buyProduct() {
    console.log("Buy something Asshole !");
  }
}

let iphone = new Product("iphone", 32000);
console.log(iphone);
console.log(iphone.displayProduct());
