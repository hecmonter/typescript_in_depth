"use strict";
var enums_1 = require("./enums");
var encyclopedia_1 = require("./encyclopedia");
var shelf_1 = require("./shelf");
var _ = require("lodash");
var snakeCaseTitle = _.snakeCase("'Fro whoe");
console.log(snakeCaseTitle);
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: 'A farewell to Arms', author: 'Ernest Hemingway', available: true, category: enums_1.Category.Children },
        { id: 3, title: 'I know why the caged bird sings', author: 'Maya Angelou', available: true, category: enums_1.Category.Poetry },
        { id: 4, title: 'Voyage to the stars', author: 'Maya Angelou', available: true, category: enums_1.Category.Fiction },
        { id: 5, title: 'Mountain brokeback', author: 'Maya Angelou', available: true, category: enums_1.Category.Fiction }
    ];
    return books;
}
function LogFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    console.log('Getting books in category ', enums_1.Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function GetBookById(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function CreateCustomerID(name, id) {
    return name + id;
}
// let idGenerator: (chars: string, nums: number) => string; 
// idGenerator = CreateCustomerID;
// let myId: string; 
// myId = idGenerator('daniel', 54); 
// console.log(myId);
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function PrintBook(book) {
    console.log(book.title + ' by ' + book.author);
}
var myBook = {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    available: true,
    category: enums_1.Category.Fiction,
    pages: 250,
    markDamage: function (reason) { return console.log(reason); }
};
//************************************************
// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// //LogBookTitles(fictionBooks);
// fictionBooks.forEach((val, idx, arr) => console.log( ++idx + ' - ' + val));
// let logDamage: DamageLogger;
// logDamage = (damage: string ) => console.log('Damage reported: ' + damage); 
// logDamage('test damage'); 
// let favoriteAuthor: Author;
// let favoriteLibrarian : Librarian;
// let favoriteLibrarian: Librarian = new UniversityLibrarian(); 
// favoriteLibrarian.name = 'Sharon'; 
// favoriteLibrarian.assistCustomer('Lynda');
// let ref: ReferenceItem = new ReferenceItem('New facts and figures', '2018');
// ref.printItem();
// ref.publisher = 'Radnonoasfaosnsf'; 
// console.log(ref.publisher)
var refBook = new encyclopedia_1.default('Encyclopedia', 3, 2016);
refBook.printCitation();
function LogAndReturn(thing) {
    return thing;
}
var bookShelf = new shelf_1.default();
//# sourceMappingURL=app.js.map