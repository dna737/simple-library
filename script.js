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

function addBookToLibrary() {
  // do stuff here
}

function displayBooks() {
  //1. find the number of books and create a grid of that size.

  let numBooks = myLibrary.length;
  const container = document.querySelector(".container");
  container.style.setProperty("--grid-rows", numBooks);
  container.style.setProperty("--grid-cols", numBooks);

  for (let i = 0; i < numBooks; i++) {
    let card = document.createElement("div");
    card.className = "card";
    container.appendChild(card);
    card.innerText = myLibrary[i].title;
    console.log(myLibrary[i].title);
  }
}

displayBooks();
