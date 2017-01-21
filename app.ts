import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import * as util from './lib/utilityFunctions'


let schoolBooks: Book[] = [
    { id: 10, title: 'The Great Gatsby', author: 'F. Scott Fitzgeral',  available: true, category: Category.Children }, 
    { id: 11, title: 'Crime and Punishment', author: 'Unknow author',  available: true, category: Category.Fiction }
];

let booksReads: Book[] = util.GetAllBooks();

booksReads.push(...schoolBooks);
//console.log(schoolBooks);

let poets: string[] = ['Shelley', 'Collins', 'Hughes']; 
let authors: string[] = ['Tolstoy', 'Fitzgerald', ...poets];
console.log(authors);