import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import * as util from './lib/utilityFunctions'

function PrintBookInfo(item:Book): void {
    console.log(`${item.title} was authored by ${item.author}`);
}

//let [book1, book2] = util.GetAllBooks();

function LogFavorityBooks([book1, book2, ...others]: Book[]) {
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    console.log(others);
}

LogFavorityBooks(util.GetAllBooks())
