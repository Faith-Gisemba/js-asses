
// Write a JavaScript program that performs the following tasks:
// 1. Create a function called getAvailableBooks that returns an array of all available
// books.

const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];

    function getAvailableBooks() {
        const availableBooks = [];
        for (let b = 0; b < books.length; b++) {
          if (books[b].isAvailable) {
            availableBooks.push(books[b]);
          }
        }
        return availableBooks;
      }
    console.log(getAvailableBooks())

//Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.

function getAuthor(name) {
    const booksAuthor = [];
    for (let a = 0; a < books.length; a++) {
      if (books[a].author === name) {
        booksAuthor.push(books[a]);
      }
    }
    return booksAuthor;
  }
console.log(getAuthor('F. Scott Fitzgerald'))
console.log(getAuthor('Charles Dickens'))
// Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
function addNewBook(newBook){
const addBook = [];
for(let y = 0; y<books.length; y++){
    if(books[y].author === newBook ){
        addBook.add(books[y])
    }
}
return addBook;

}
console.log(addNewBook)


// 4. Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function checkoutBook(title) {
    const book = books.find(book => book.title === title);
    if (book && book.isAvailable) {
      book.isAvailable = false;
      return title
    }
    return title
  }

console.log(checkoutBook('The Catcher in the Rye'))
  

// Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.
function returnBook(title){
    const book = books.find(book => book.title === title);
    if (book && book.isAvailable) {
      book.isAvailable = true;
      return title
    }
    return title
  }

console.log(checkoutBook('The Catcher in the Rye'))
  