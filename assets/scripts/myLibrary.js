var mLibrary = new Library();

function initializeLibrary() {
  var book1 = new Book("Brothers Karamazov", "Fydor Dostoyevsky", 750, true);
  var book2 = new Book("The Great Gatsby", "Scott Fitzgerald", 200, false);
  var book3 = new Book("Catch-22", "Joseph Heller", 453, true);
  mLibrary.addBook(book1);
  mLibrary.addBook(book2);
  mLibrary.addBook(book3);
}


function renderAll(){
  mLibrary.books.forEach(function(book) {
    render(book);
  });
}


/* Takes a book object and creates a book-card view from the attributes and appends it to the first container */
function render(book) {
  var bookCard = document.createElement('div');
  bookCard.className = "book-card";

  var title = document.createElement('div');
  title.className = "title";
  title.textContent = book.title;
  bookCard.appendChild(title);

  var author = document.createElement('div');
  author.className = "author";
  author.textContent = book.author;
  bookCard.appendChild(author);

  var pages = document.createElement('div');
  pages.className = "pages";
  pages.textContent = book.numberOfPages;
  bookCard.appendChild(pages);

  var haveRead = document.createElement('div');
  if (book.haveRead) {
    haveRead.className = "circle have-read";
  }
  else {
    haveRead.className = "circle have-not-read";
  }
  bookCard.appendChild(haveRead);

  var removeButton = document.createElement('button');
  removeButton.className = "remove";
  var numBooks = document.querySelector('.container').children.length - 2;
  removeButton.setAttribute('data-book-number', numBooks + 1);
  removeButton.textContent="remove book";
  bookCard.appendChild(removeButton);

  document.querySelector('.container').appendChild(bookCard);

};

initializeLibrary();
renderAll();

var showNewBookFormButton = document.getElementById('new-book-form-btn');
var nevermindButton = document.getElementById('nevermind-btn');
var addNewBookButton = document.getElementById('submit-new-book-btn');

showNewBookFormButton.addEventListener("click", function(event) {
  event.preventDefault();
  showNewBookFormButton.className = "hide button";
  var bookForm = document.querySelector('.new-book-form');
  bookForm.classList.remove('hide');

});

nevermindButton.addEventListener("click", function(event) {
  event.preventDefault();
  var bookForm = document.querySelector('.new-book-form');
  bookForm.className = "hide new-book-form";
  showNewBookFormButton.classList.remove('hide');
});


addNewBookButton.addEventListener("click", function(event) {

  var title = document.querySelector('#new-title').value;
  var author = document.querySelector('#new-author').value;
  var pages = document.querySelector('#new-pages').value;
  var haveRead = document.querySelector('#have-read-checkbox').value;
  var newBook = new Book(title, author, pages, haveRead);
  mLibrary.addBook(newBook);
  render(newBook);
});

var removeButtons = document.querySelectorAll('.remove');
var removeButtonsArray = Array.prototype.slice.call(removeButtons);

removeButtons.forEach(removeButton => removeButton.addEventListener(
    'click', function(event) {

  bn = this.dataset.bookNumber;
  mLibrary.books.splice(bn, 1);

  this.parentNode.className = "hide";

  /* also must adjust the data attriubtes to rematch library indices */
  updateBookNumbers(bn);

}));

function updateBookNumbers(startIndex) {
  var removeButton;
  for (i=startIndex; i <= mLibrary.books.length + 1; i++) {
    removeButton = removeButtons[i];
    currentBookNumber = removeButton.dataset.bookNumber;
    removeButton.setAttribute('data-book-number', currentBookNumber - 1);
  }
};

