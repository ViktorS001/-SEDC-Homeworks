let string = "";
for (number = 1; number <= 20; number++) {
  if (number % 2 === 0) {
    string += number + "\n";
  } else if (number % 2 !== 0) {
    string += number + " ";
  }
}
console.log(string);
