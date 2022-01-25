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
  console.log("The maximal number of the array is: " + Math.max(numArray)); //fixed, but also wanted to go with that solution so its "different"
  return result;
}

function getMinOfArray(numArray) {
  let result = Math.min.apply(null, numArray);
  console.log("The minimal number of the array is: " + Math.min(...numArray)); //fixed, the same applies^
  return result;
}

let a = getMinOfArray(array);
let b = getMaxOfArray(array);

let sum = a + b;
console.log("The sum of the max element and the min element is:" + sum);

//Third solution(fixed)
let maxElement = array[0];
let minElement = array[0];

for (i = 0; i < array.length; i++) {
  if (array[i] > maxElement) {
    maxElement = array[i];
  } else if (array[i] < minElement) {
    minElement = array[i];
  }
}
console.log(`the max element in this array is ${maxElement}`);
console.log(`the min element in this array is ${minElement}`);
