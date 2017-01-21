"use strict";
var enums_1 = require("./enums");
var util = require("./lib/utilityFunctions");
var schoolBooks = [
    { id: 10, title: 'The Great Gatsby', author: 'F. Scott Fitzgeral', available: true, category: enums_1.Category.Children },
    { id: 11, title: 'Crime and Punishment', author: 'Unknow author', available: true, category: enums_1.Category.Fiction }
];
var booksReads = util.GetAllBooks();
booksReads.push.apply(booksReads, schoolBooks);
//console.log(schoolBooks);
var poets = ['Shelley', 'Collins', 'Hughes'];
var authors = ['Tolstoy', 'Fitzgerald'].concat(poets);
console.log(authors);
//# sourceMappingURL=app.js.map