import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, PublicLibrarian, ReferenceItem, Employee, Researcher } from './classes';
import * as util from './lib/utilityFunctions';

import './librarianExtensions'; 

// merging interfaces
//let mergedBook: Book; 
//mergedBook.publisher = 'extreme programming'; 

let newLibririan = new UniversityLibrarian(); 
newLibririan.hostSeminar('Economics');


// typeof type guard

function logVisitor(param: number | string ){
    if(typeof param === 'number'){
        console.log(`${param} new visitors arrived`); 
    } else {
        console.log(`${param.toUpperCase()} visited`); 
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
function isBook(text: Book | Magazine): text is Book {
    return (<Book>text).author !== undefined; 
}

let readingMaterial: Book | Magazine = util.GetAllBooks()[0]; 

if(isBook(readingMaterial)){
    console.log(`The Book's author is ${readingMaterial.author}`);
} else {
    console.log(`The Magazine's publisher is ${readingMaterial.publisher}`); 
}
