const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mainDiv = document.getElementById("main");
let titleDiv = mainDiv.firstElementChild;
let contentDiv = mainDiv.children[1];

function printNumbers(numberArray, element) {
  element.innerHTML = "";
  element.innerHTML += "<ul>";
  for (let i = 0; i < numberArray.length; i++) {
    element.innerHTML += `<li>${numberArray[i]}</li>`;
  }
  element.innerHTML += "</ul>";
}

function sumOfArrayElements(numberArray, element) {
  let sum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }
  element.innerHTML += `<p>The sum of the array elements is: 
   ${array[0]} + ${array[1]} + ${array[2]} + ${array[3]} + ${array[4]} + ${array[5]}
 + ${array[6]} + ${array[7]} + ${array[8]}  + ${array[9]} = ${sum}</p>`;
}

printNumbers(array, contentDiv);
sumOfArrayElements(array, contentDiv);
