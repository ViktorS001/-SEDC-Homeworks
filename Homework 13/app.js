let row = document.getElementById("row");
let numberOfRows = parseInt(row.value);

let column = document.getElementById("column");
let numberOfColumns = parseInt(column.value);

let button = (document.getElementById("btn").onclick = createTable);

function createTable(numberOfRows, numberOfColumns) {
  let tbl = document.createElement("table");
  let contentDiv = document.getElementById("content");
  tbl.border = "1";
  for (i = 1; i <= numberOfRows; i++) {
    let createRow = document.createElement("tr");

    for (j = 1; j <= numberOfColumns; j++) {
      let cell = document.createElement("td");
      cell.innerText = `Row-${i} Column-${j}`;
      createRow.appendChild(cell);
    }

    tbl.appendChild(createRow);
  }

  contentDiv.appendChild(tbl);
}
