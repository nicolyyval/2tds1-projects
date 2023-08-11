class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getbookBorrowed = [];
    }
    getBookBorrowed(book) {
        this.getBookBorrowed.push(book);
    }
}
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addUser(user) {
        this.users.push(user);
    }
}
const book1 = new Book('Harry Potter', 'J.K Rowling', 300);
const user1 = new User('Thiago Ferreira', 24);
const library = new Library();
library.addBook(book1);
library.addUser(user1);

user1.getBookBorrowed(book1);

console.log(book1);
console.log(user1);
console.log(library);