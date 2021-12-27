let checker = prompt(
  "Enter 1 to convert from dog years to human years \nEnter 2 to convert from human years to dog years"
);
if (checker == 1) {
  let dogYears = prompt("Enter dog years to convert to human");
  var humanAge = convertor(dogYears);
  console.log(humanAge);
} else if (checker == 2) {
  let humanYears = prompt("Enter human years to convert it to dog years");
  var dogAge = convertor(humanYears);
  console.log(dogAge);
} else {
  alert("error");
}

function convertor(years) {
  if (checker == 1) {
    return years / 7;
  } else {
    return years * 7;
  }
}
