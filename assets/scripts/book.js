/* Book constructor */

function Book(title, author, numberOfPages, haveRead) {
  this.title  = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this. haveRead = haveRead;
  
  this.info = function () {
    var haveReadString;

    if (haveRead) {
      haveReadString = "already read"
    }
    else {
      haveReadString = "not read yet"
    }

    var info = `${title} by ${author}. ${numberOfPages} pages, ${haveReadString}`

    return info;

  };
}

module.exports = Book;
