var Book = require('./book');
var Library = require('./library');

describe('A book object', function () {
  var book = new Book("How to Bark All Day", "Bob the Dog", 100, true);


  it('has a title', function () {
    expect(book.title).toBeDefined();
  });

  it('has an author', function () {
    expect(book.author).toBeDefined();
  });

  it('has a number of pages', function () {
    expect(book.numberOfPages).toBeDefined();
  });

  it('a read indicator', function () {
    expect(book.haveRead).toBeDefined();
  });

  it('has an info method', function () {
    expect(book.info()).toBe('How to Bark All Day by Bob the Dog. 100 pages, already read');

  });

})


describe('A library object', function () {

  var library = new Library();

  it('has a collection of books', function () {
    expect(library.books.constructor).toBe(Array);
  });


  it('can have books added to it', function() {
    var newBook = new Book("The Brothers Karamasov", "Dystoyvseky", 1000, true);

    expect(library.books.length).toBe(0);
    library.addBook(newBook);
    expect(library.books.length).toBe(1);
  });

})
