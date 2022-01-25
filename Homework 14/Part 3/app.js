function BookStatus(title, author, status) {
  this.title = title;
  this.author = author;
  this.readingStatus = function (status) {
    if (status == true) {
      console.log(`Already read ${this.title} by ${this.author}`);
    } else if (status == false) {
      console.log(`You still need to read ${this.title} by ${this.author}`);
    }
  };
}

let firstBook = new BookStatus("The Alchemist", "Paulo Coelho", true);
