import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem, Employee, Researcher } from './classes';
import * as util from './lib/utilityFunctions';

function PrintBookInfo(item:Book): void {
    console.log(`${item.title} was authored by ${item.author}`);
}

let [book1, book2] = util.GetAllBooks();

function LogFavorityBooks([book1, book2, ...others]: Book[]) {
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    console.log(others);
}

//LogFavorityBooks(util.GetAllBooks());


//Tuple types examples: 
let catalogLocation: [string, Book] = ['123.45678', book1]; 
//catalogLocation[2] = true; // Error   boolean != string | book
//catalogLocation[2] = 'str' // ok.
//catalogLocation[2] = book2 // ok. 

// custom tuple type
interface KeyValuePair<K, V> extends Array<K | V> {
    0: K,
    1: V   
}

let catalogLocation2: KeyValuePair<string, Book> = ['other string', book1, 'string', book1]; 


// union types: specify several valid types for a value. Vertical bar is used to separate valid types.
let allBooks: Book[] = util.GetAllBooks();
let allMagazines: Magazine[] = util.GetAllMagazines();

let readingMaterial: Book | Magazine = allBooks[0];

function PrintTitle(item: Book | Magazine){
    console.log(item.title); 
}

// PrintTitle(allBooks[0]);
// PrintTitle(allMagazines[0]); 

// interception types examples: 
let serialNovel: Book & Magazine = {
    id: 100,   // Book property
    title: 'The Gradual Tale', // Book property
    author: 'Occasional Pen', // Book property
    available: true, // Book property
    category: Category.Fiction, // Book property
    publisher: 'Serial Press'  // Magazine property    
};

// mixins 
function applyMixins(derivedCtor: any, baseCtors: any[]){
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name]; 
        });
    });
}

applyMixins(UniversityLibrarian, [Employee, Researcher]); 

let newLibrarianClass = new UniversityLibrarian();
newLibrarianClass.doResearch('Economics'); 
//console.log('%O', UniversityLibrarian); 



