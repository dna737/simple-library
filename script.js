let myLibrary = [
  new Book("The Pragmatic Programmer", "Andy Hunt & Dave Thomas", 352, true),
  new Book("Clean Code", "Robert C. Martin", 464, false),
  new Book("JavaScript: The Good Parts", "Douglas Crockford", 176, true),
];

function Book(title, author, numPages, completed) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.completed = completed;
}

function enableForm() {
  formPopup.style.setProperty("display", "flex");
  formPopup.style.setProperty("justify-content", "center");
  formPopup.style.setProperty("align-items", "center");
}

function getBookInfo() {
  let newBook = null;
  let title = document.getElementById("title-input").value;
  let author = document.getElementById("author-input").value;
  let numPages = parseInt(document.getElementById("num-pages-input").value);
  let completed = document.getElementById("completed-input").checked;
  newBook = new Book(title, author, numPages, completed);

  return newBook;
}

function addBookToLibrary() {
  //now that the form details have been retrieved, add those details to the array.
  let newBook = getBookInfo();
  myLibrary.push(newBook);
  displayBooks();
}

function setBookStatus(card, currentBook) {
  if (currentBook.completed) {
    card.style.setProperty("border", "2.4px solid green");
  } else {
    card.style.setProperty("border", "2.4px solid red");
  }
}

function createRemoveButton(card) {
  console.log(card);
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove Book";
  card.appendChild(removeButton);
}

function displayBooks() {
  //1. find the number of books and create a grid of that size.

  let numBooks = myLibrary.length;
  const container = document.querySelector(".container");
  container.innerHTML = ""; //clears the parent's content.

  for (let i = 0; i < numBooks; i++) {
    let card = document.createElement("div");
    card.className = "card";
    container.appendChild(card);
    let currentBook = myLibrary[i];
    card.innerText = currentBook.title;
    // card.innerText = ("\nBy\n", currentBook);
    card.innerText += `\nBy\n${currentBook.author}\n`;
    card.innerText += `Pages read: \n${currentBook.numPages}`;
    setBookStatus(card, currentBook);
    createRemoveButton(card);
    console.log(myLibrary[i].title);
  }
}

function clearForm() {
  form.reset();
}

function hideFormContainer() {
  formPopup.style.setProperty("display", "none");
}

let formPopup = document.querySelector(".form-popup");

//call addBookToLibrary() when "Add Book" is called.
let addBookButton = document.querySelector(".add-book");
addBookButton.addEventListener("click", () => {
  console.log("calling enable form...");
  enableForm();
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
  clearForm();
  hideFormContainer();
});

displayBooks();
