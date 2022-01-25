//changing all paragraphs text
document.querySelectorAll("div").innerText = "This is changed";

//changing all headers text
let firstDiv = document.querySelectorAll("body")[0].firstElementChild;
let lastDiv = document.querySelectorAll("div")[2];

let header1First = firstDiv.querySelector("h1");
header1First.innerText = "This is changed";

let header1last = lastDiv.querySelector("h1");
header1last.innerText = "This is changed";

let header3last = lastDiv.querySelector("h3");
header3last.innerText = "This is changed ";
