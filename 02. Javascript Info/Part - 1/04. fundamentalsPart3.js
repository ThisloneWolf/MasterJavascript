/**
 * Null Coalescing Operator ??
 * ?? returns the defined value whereas || returns the truthy value
 * It's used to assign default values to variables
 * dr
 */

const firstName = null;
const lastName = null;
const nickName = "Super Coder";

console.log(firstName ?? lastName ?? nickName ?? "Anonymous");
