//First solution
function tellStory1(name, mood, activity) {
  name = prompt("Please enter your name:");
  mood = prompt("Please enter your current mood");
  activity = prompt("Please enter what are you doing right now");
  alert(name + " is " + mood + " and is currently " + activity + ".");
}
tellStory1();

//Fixed solution
function tellStory2(arrayProperties) {
  let name = (arrayProperties[0] = prompt("Please enter your name:"));
  let mood = (arrayProperties[1] = prompt("Please enter your current mood"));
  let activity = (arrayProperties[2] = prompt(
    "Please enter what are you doing right now"
  ));
  alert(`${name} is ${mood} and is currently ${activity}.`);
}
tellStory2("", "", "");
