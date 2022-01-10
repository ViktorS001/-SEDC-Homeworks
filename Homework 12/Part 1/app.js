//changing all paragraphs text
let allP = document.getElementsByTagName("p");
allP.innerText = "hello world";
console.log(allP.innerText);

//changing all headers text
let firstDiv = document.getElementsByTagName("body")[0].firstElementChild;
let lastDiv = document.getElementsByTagName("body")[0].lastElementChild;

let header1First = firstDiv.getElementsByTagName("h1");
header1First.innerText = "hello world";
console.log(header1First.innerText);

let header1last = lastDiv.getElementsByTagName("h1");
header1last.innerText = "hello world";
console.log(header1last.innerText);

let header3last = lastDiv.getElementsByTagName("h3");
header3last.innerText = "hello world";
console.log(header3last.innerText);
