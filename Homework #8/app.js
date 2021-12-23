var phone = 119.95; //price of units in dollar
var units = 30; //how many units are needed
var tax = phone * units * 0.05; //5% tax calculated

alert("the price for 30 phones including 5% tax is " + (phone * units + tax) + "$");//price of 30 units with tax
console.log("the price for 30 phones including 5% tax is " + (phone * units + tax) + "$");

var unit = prompt("please enter how many more units you will like to buy");//if you would like to buy more than 30 units
alert("the price for " +unit+ " phones including 5% tax is: "  + (phone * unit + tax) + "$");
console.log("the price for " +unit+ " phones including 5% tax is: "  + (phone * unit + tax) + "$");

var total = (phone * units + tax) + (phone * unit + tax);//total price
alert("total: "  + total + "$");
console.log("total: "  + total + "$");