"use strict";
var util = require("./lib/utilityFunctions");
function PrintBookInfo(item) {
    console.log(item.title + " was authored by " + item.author);
}
//let [book1, book2] = util.GetAllBooks();
function LogFavorityBooks(_a) {
    var book1 = _a[0], book2 = _a[1], others = _a.slice(2);
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    console.log(others);
}
LogFavorityBooks(util.GetAllBooks());
//# sourceMappingURL=app.js.map