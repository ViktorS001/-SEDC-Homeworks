const arrayOfStudents = [];
let button = (document.getElementById("savebtn").onclick = function () {
  let student = {
    firstName: document.getElementById("first").value,
    lastName: document.getElementById("last").value,
    age: document.getElementById("age").value,
  };
  arrayOfStudents.push(student);
  console.log(arrayOfStudents);
});
