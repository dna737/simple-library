let myLibrary = [];

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
  //if the status is incomplete, then the button should read "mark as completed" and vice-versa.
  const statusButton = document.createElement("div");
  statusButton.classList.add("status-button");
  if (currentBook.completed) {
    card.style.setProperty("border", "2.4px solid green");
    // statusButton.style.setProperty("background-color", "red");
    statusButton.textContent = "Mark as incomplete";
  } else {
    card.style.setProperty("border", "2.4px solid red");
    // statusButton.style.setProperty("background-color", "green");
    statusButton.textContent = "Mark as completed";
  }

  card.appendChild(statusButton);

  //TODO: move the code below to another function called "switchBookStatus()"; just change the border colors and the textcontent of the appropriate div after the user clicks on it.
  const marker = document.querySelector(".status-button");
  marker.addEventListener("click", () => {
    console.log(marker.textContent);
  });
}

function createRemoveButton(card, i) {
  console.log(card);
  card.classList.add(`card-${i}`);
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove Book";
  removeButton.classList.add(`rb-${i}`);
  removeButton.classList.add("remove-button");
  card.appendChild(removeButton);

  activateRemoveButton(removeButton);
}

function activateRemoveButton(removeButton) {
  removeButton.addEventListener("click", () => {
    let currParent = removeButton.parentElement;
    removeBookFromLibrary(currParent);
  });
}

function removeBookFromLibrary(card) {
  let currIndex = parseInt(card.classList[1].substring(5)); //for e.g., returns "32" from ".card-32"
  myLibrary.splice(currIndex, 1);
  card.remove();
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
    createRemoveButton(card, i);
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
