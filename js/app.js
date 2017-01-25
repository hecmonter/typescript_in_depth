"use strict";
var classes_1 = require("./classes");
var util = require("./lib/utilityFunctions");
require("./librarianExtensions");
// merging interfaces
//let mergedBook: Book; 
//mergedBook.publisher = 'extreme programming'; 
var newLibririan = new classes_1.UniversityLibrarian();
newLibririan.hostSeminar('Economics');
// typeof type guard
function logVisitor(param) {
    if (typeof param === 'number') {
        console.log(param + " new visitors arrived");
    }
    else {
        console.log(param.toUpperCase() + " visited");
    }
}
// logVisitor(10); 
// logVisitor('Mary Ann'); 
// instanceof type guards
// let lib: Librarian = new PublicLibrarian();
// if(lib instanceof UniversityLibrarian) {
//     lib.assistFaculty();
// }
// if(lib instanceof PublicLibrarian){
//     lib.teachCommunity();
// }
//custome type guard
function isBook(text) {
    return text.author !== undefined;
}
var readingMaterial = util.GetAllBooks()[0];
if (isBook(readingMaterial)) {
    console.log("The Book's author is " + readingMaterial.author);
}
else {
    console.log("The Magazine's publisher is " + readingMaterial.publisher);
}
//# sourceMappingURL=app.js.map