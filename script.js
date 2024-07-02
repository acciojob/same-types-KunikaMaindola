function isSameType(value1, value2) {
  // Check if both values are NaN
  if (isNaN(value1) && isNaN(value2)) {
    // To ensure that only actual NaN values are considered equal
    return typeof value1 === "number" && typeof value2 === "number";
  }
  
  // Check if both values are of the same type
  return typeof value1 === typeof value2;
}

// Do not change the code below.
let value1 = prompt("Enter first value.");
let value2 = prompt("Enter second value.");
alert(isSameType(value1, value2));
