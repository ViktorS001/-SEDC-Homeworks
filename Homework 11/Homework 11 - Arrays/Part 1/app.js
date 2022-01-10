function tellStory(name, mood, activity) {
  name = prompt("Please enter your name:");
  mood = prompt("Please enter your current mood");
  activity = prompt("Please enter what are you doing right now");
  alert(name + " is " + mood + " and is currently " + activity + ".");
}
tellStory();
