const firstNames = ["Bob", "Boris", "Bojan", "Viktor"];
const lastNames = ["Marley", "Borisovski", "Zdravkovski", "Stefanovski"];

function full(first, last) {
  const fullName = [];
  //fixed it to work with the arguments not outside variables
  for (i = 0; i < first.length && last.length; i++) {
    fullName.push(`${i + 1}.${first[i]} ${last[i]}`);
  }
  console.log(fullName);
}

full(firstNames, lastNames);
