const firstNames = ["Bob", "Boris", "Bojan", "Viktor"];
const lastNames = ["Marley", "Borisovski", "Zdravkovski", "Stefanovski"];

function full(first, last) {
  const fullName = [];
  for (i = 0; i < firstNames.length && lastNames.length; i++) {
    fullName.push(`${i + 1}.${first[i]} ${last[i]}`);
  }
  console.log(fullName);
}

full(firstNames, lastNames);
