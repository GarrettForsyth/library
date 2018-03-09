/* Library Constructor */

function Library() {

  this.books = [];
  this.addBook = function (book) {
    this.books.push(book);
  };


};

module.exports = Library;

