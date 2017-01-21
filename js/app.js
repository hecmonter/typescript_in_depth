"use strict";
var util = require("./lib/utilityFunctions");
function PrintBookInfo(item) {
    console.log(item.title + " was authored by " + item.author);
}
var _a = util.GetAllBooks(), book1 = _a[0], book2 = _a[1];
function LogFavorityBooks(_a) {
    var book1 = _a[0], book2 = _a[1], others = _a.slice(2);
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    console.log(others);
}
LogFavorityBooks(util.GetAllBooks());
//Tuple types examples: 
var catalogLocation = ['123.45678', book1];
var catalogLocation2 = ['other string', book1, 'string', book1];
//# sourceMappingURL=app.js.map