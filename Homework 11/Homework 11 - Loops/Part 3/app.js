const array = [5, 3, 2, 2, 23, 1, 312, 4, 124, 31, 41, 9];

//First solution
let maxElement = Math.max(...array);
let minElement = Math.min(...array);
let sum;
sum = maxElement + minElement;
console.log(sum);

//Second solution
function getMaxOfArray(numArray) {
  let result = Math.max.apply(null, numArray);
  console.log(
    "The maximal number of the array is: " + Math.max.apply(null, numArray)
  );
  return result;
}

function getMinOfArray(numArray) {
  let result = Math.min.apply(null, numArray);
  console.log(
    "The minimal number of the array is: " + Math.min.apply(null, numArray)
  );
  return result;
}

let a = getMinOfArray(array);
let b = getMaxOfArray(array);

let sum = a + b;
console.log("The sum of the max element and the min element is:" + sum);
