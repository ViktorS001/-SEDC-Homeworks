let userMoney = 1000;
let withdraw = prompt(
  "Enter how much money you would like to withdraw from your bank account"
);
function atm(userMoney, withdraw) {
  if (withdraw > userMoney) {
    console.log("Not enough money");
  } else if (withdraw <= userMoney) {
    let moneyLeft = userMoney - withdraw;
    console.log("Widthdraw amount: " + withdraw);
    console.log("New balance: " + moneyLeft);
  }
}
var balance = atm(userMoney, withdraw);
