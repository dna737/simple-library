let myLibrary = [
  {
    title: "The Pragmatic Programmer",
    author: "Andy Hunt & Dave Thomas",
    numPages: 352,
    completed: true,
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    numPages: 464,
    completed: false,
  },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    numPages: 176,
    completed: true,
  },
];

function Book() {
  // the constructor...
}

function enableForm() {
  let formPopup = document.querySelector(".form-popup");
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
  newBook = {
    title: title,
    author: author,
    numPages: numPages,
    completed: completed,
  };

  return newBook;
}

function addBookToLibrary() {
  //now that the form details have been retrieved, add those details to the array.
  let newBook = getBookInfo();
  console.log(newBook, "esdf");
  myLibrary.push(newBook);
}

function displayBooks() {
  //1. find the number of books and create a grid of that size.

  let numBooks = myLibrary.length;
  const container = document.querySelector(".container");

  for (let i = 0; i < numBooks; i++) {
    let card = document.createElement("div");
    card.className = "card";
    container.appendChild(card);
    card.innerText = myLibrary[i].title;
    console.log(myLibrary[i].title);
  }
}

displayBooks();

//call addBookToLibrary() when "Add Book" is called.
let addBookButton = document.querySelector(".add-book");
addBookButton.addEventListener("click", () => {
  console.log("calling enable form...");
  enableForm();
});

function clearForm() {
  form.reset();
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
  clearForm();
});
