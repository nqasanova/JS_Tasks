class Book {
    constructor(isbn, title, author, published) {
      this.isbn = isbn;
      this.title = title;
      this.author = author;
      this.published = new Date(published);
    }
  }
  
  const bookData = [
    new Book("9781593275846", "Eloquent JavaScript", "Marijn Haverbeke", "2011-12-04"),
    new Book("9781491943533", "Practical Modern JavaScript", "Nicolás Bevacqua", "2017-07-16")
  ];
  
  const userInput = prompt("Enter the sorting criteria (isbn ASC or title DESC):");
  const [field, order] = userInput.split(' ');
  
  function compareBooks(book1, book2) {
    const fieldA = book1[field].toString();
    const fieldB = book2[field].toString();
  
    if (order === 'ASC') {
      return fieldA.localeCompare(fieldB);
    } else if (order === 'DESC') {
      return fieldB.localeCompare(fieldA);
    } else {
      throw new Error("Invalid sorting order. Use ASC or DESC.");
    }
  }
  
  if (field in bookData[0]) {
    bookData.sort(compareBooks);
    console.log("Sorted Books:");
    bookData.forEach((book) => {
      console.log(`${book.isbn} - ${book.title} by ${book.author} (Published: ${book.published.toDateString()})`);
    });
  } else {
    console.log("Error: Invalid field for sorting.");
  }