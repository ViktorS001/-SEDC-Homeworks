var inputYear = prompt("Enter a year to see the Chinese Zodiac for it");
var calcZodiac = (inputYear - 4) % 12;
if (inputYear > 2021) {
  alert("The year " + inputYear + " is not valid");
} else {
  switch (calcZodiac) {
    case 0:
      alert("The year " + inputYear + " in the Chinese Zodiac is a Rat");
      break;
    case 1:
      alert("The year " + inputYear + " in the Chinese Zodiac is a OX");
      break;
    case 2:
      alert("The year " + inputYear + " in the Chinese Zodiac is a Tiger");
      break;
    case 3:
      alert("The year " + inputYear + " in the Chinese Zodiac is a Rabbit");
      break;
    case 4:
      alert("The year " + inputYear + " in the Chinese Zodiac is a Dragon");
      break;
    case 5:
      alert("The year " + inputYear + " in the Chinese Zodiac is a Snake");
      break;
    case 6:
      alert("The year " + inputYear + " in the Chinese Zodiac is a Horse");
      break;
    case 7:
      alert("The year " + inputYear + " in the Chinese Zodiac is a Goat");
      break;
    case 8:
      alert("The year " + inputYear + " in the Chinese Zodiac is a Monkey");
      break;
    case 9:
      alert("The year " + inputYear + " in the Chinese Zodiac is a Rooster");
      break;
    case 10:
      alert("The year " + inputYear + " in the Chinese Zodiac is a Dog");
      break;
    case 11:
      alert("The year " + inputYear + " in the Chinese Zodiac is a Pig");
      break;
    default:
      alert("Error, please enter a year");
      break;
  }
}
