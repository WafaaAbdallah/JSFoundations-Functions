/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
 function greet(name) {
  // Your code here
  return(`Hello ${name}`);
}

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  if  (n%2 === 0)
  return false;
  else
  return true;
  // Your code here
}
console.log(isOdd(7));
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
 function oddsSmallerThan(n) {
  var allOddNumbers=0;
  for (let i = n-1; i >0; i--) {
    if(i%2 !== 0){
     allOddNumbers++
    }
  }  
  return allOddNumbers;  
}
console.log (oddsSmallerThan(9));
/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if(n%2 === 1)
  return n*n;
  else
  return n*2;

  // Your code here
}
console.log(squareOrDouble(3));
console.log (squareOrDouble(4));
module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
