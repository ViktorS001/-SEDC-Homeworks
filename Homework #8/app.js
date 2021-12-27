var phonePrice = 119.95; //price of units in dollar
var initialUnits = 30; //how many units are needed
var tax = phonePrice * initialUnits * 0.05; //5% tax calculated

alert(
  "the price for 30 phones including 5% tax is " +
    (phonePrice * initialUnits + tax) +
    "$"
); //price of 30 units with tax
console.log(
  "the price for 30 phones including 5% tax is " +
    (phonePrice * initialUnits + tax) +
    "$"
);

var extraUnits = prompt(
  "please enter how many more units you will like to buy"
); //if you would like to buy more than 30 units
var taxExtraunits = phonePrice * extraUnits * 0.05;
alert(
  "the price for " +
    extraUnits +
    " phones including 5% tax is: " +
    (phonePrice * extraUnits + taxExtraunits) +
    "$"
);
console.log(
  "the price for " +
    extraUnits +
    " phones including 5% tax is: " +
    (phonePrice * extraUnits + taxExtraunits) +
    "$"
);
//5% tax calculated
var total =
  phonePrice * extraUnits + taxExtraunits + (phonePrice * initialUnits + tax); //total price
alert("total: " + total + "$");
console.log("total: " + total + "$");
