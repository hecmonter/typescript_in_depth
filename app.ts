import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import * as util from './lib/utilityFunctions'

function PrintBookInfo(item:Book): void {
    console.log(`${item.title} was authored by ${item.author}`);
}

let [book1, book2] = util.GetAllBooks();

function LogFavorityBooks([book1, book2, ...others]: Book[]) {
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    console.log(others);
}

LogFavorityBooks(util.GetAllBooks())


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



