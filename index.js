function shiftChar(c, shiftAmount) {
  return String.fromCharCode(c.charCodeAt(0) + shiftAmount);
}

function mix(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    let shiftAmount = (i % 5) + 1;
    output += shiftChar(input[i], shiftAmount);
  }
  return output;
}

function unmix(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    let shiftAmount = (i % 5) + 1;
    output += String.fromCharCode(input[i].charCodeAt(0) - shiftAmount);
  }
  return output;
}

// Example usage
const original = "Hello, World!";
const mixed = mix(original);
const unmixed = unmix(mixed);

console.log("Original:", original);
console.log("Mixed:", mixed);
console.log("Unmixed:", unmixed);
