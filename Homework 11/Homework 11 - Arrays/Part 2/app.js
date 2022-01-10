let array = [1, 2, 3, 4, 5];

function validateNumber(checkArray) {
  for (let num of checkArray) {
    if (typeof num === "number") {
      continue;
    } else {
      return 0;
    }
  }
}

function sumofArrayElements(array) {
  let sum = 0;
  for (let element of array) {
    sum += element;
  }
  console.log("The sum of the five elements is: " + sum);
}

if (validateNumber(array) == 0) {
  alert("Error\n" + "Please enter a number");
} else {
  sumofArrayElements(array);
}
