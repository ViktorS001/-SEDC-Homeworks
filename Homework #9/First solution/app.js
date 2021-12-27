var inputYear = prompt("Enter a year to see the Chinese Zodiac for it");
var calc = (inputYear - 4) % 12;
if (inputYear > 2021) {
  alert("The year " + inputYear + " is not valid");
} else if (calc == 0) {
  alert("The year " + inputYear + " in the Chinese Zodiac is a Rat");
} else if (calc == 1) {
  alert("The year " + inputYear + " in the Chinese Zodiac is a Ox");
} else if (calc == 2) {
  alert("The year " + inputYear + " in the Chinese Zodiac is a Tiger");
} else if (calc == 3) {
  alert("The year " + inputYear + " in the Chinese Zodiac is a Rabbit");
} else if (calc == 4) {
  alert("The year " + inputYear + " in the Chinese Zodiac is a Dragon");
} else if (calc == 5) {
  alert("The year " + inputYear + " in the Chinese Zodiac is a Snake");
} else if (calc == 6) {
  alert("The year " + inputYear + " in the Chinese Zodiac is a Horse");
} else if (calc == 7) {
  alert("The year " + inputYear + " in the Chinese Zodiac is a Goat");
} else if (calc == 8) {
  alert("The year " + inputYear + " in the Chinese Zodiac is a Monkey");
} else if (calc == 9) {
  alert("The year " + inputYear + " in the Chinese Zodiac is a Rooster");
} else if (calc == 10) {
  alert("The year " + inputYear + " in the Chinese Zodiac is a Dog");
} else if (calc == 11) {
  alert("The year " + inputYear + " in the Chinese Zodiac is a Pig");
} else {
  alert("Error, please enter a year");
}
