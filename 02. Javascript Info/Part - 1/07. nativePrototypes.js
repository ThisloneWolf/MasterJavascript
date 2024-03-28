/**
 * Native protoypes
 */

function Product(name, price) {
  console.log(this, ": Before Assigning");
  this.name = name;
  this.price = price;
  console.log(this, ": After Assigning");
}

let product = new Product("IPhone", 45000);
console.log(product);
