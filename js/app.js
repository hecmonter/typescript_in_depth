"use strict";
var enums_1 = require("./enums");
var classes_1 = require("./classes");
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
//LogFavorityBooks(util.GetAllBooks());
//Tuple types examples: 
var catalogLocation = ['123.45678', book1];
var catalogLocation2 = ['other string', book1, 'string', book1];
// union types: specify several valid types for a value. Vertical bar is used to separate valid types.
var allBooks = util.GetAllBooks();
var allMagazines = util.GetAllMagazines();
var readingMaterial = allBooks[0];
function PrintTitle(item) {
    console.log(item.title);
}
// PrintTitle(allBooks[0]);
// PrintTitle(allMagazines[0]); 
// interception types examples: 
var serialNovel = {
    id: 100,
    title: 'The Gradual Tale',
    author: 'Occasional Pen',
    available: true,
    category: enums_1.Category.Fiction,
    publisher: 'Serial Press' // Magazine property    
};
// mixins 
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
applyMixins(classes_1.UniversityLibrarian, [classes_1.Employee, classes_1.Researcher]);
var newLibrarianClass = new classes_1.UniversityLibrarian();
newLibrarianClass.doResearch('Economics');
//console.log('%O', UniversityLibrarian); 
//# sourceMappingURL=app.js.map