import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import Encyclopedia from './encyclopedia';
import Shelf from './shelf';

import * as _ from "lodash";
let snakeCaseTitle = _.snakeCase("'Fro whoe");
console.log(snakeCaseTitle);


function GetAllBooks(): Book[] {
    let books: Book[] = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction},
        { id: 2, title: 'A farewell to Arms', author: 'Ernest Hemingway', available: true, category: Category.Children},
        { id: 3, title: 'I know why the caged bird sings', author: 'Maya Angelou', available: true, category: Category.Poetry},
        { id: 4, title: 'Voyage to the stars', author: 'Maya Angelou', available: true, category: Category.Fiction},
        { id: 5, title: 'Mountain brokeback', author: 'Maya Angelou', available: true, category: Category.Fiction}
    ];
    return books; 
}

function LogFirstAvailable(books): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for(let currentBook of books) {
        if(currentBook.available){
            firstAvailable = currentBook.title; 
            break; 
        }
    }

    console.log('Total Books: ' + numberOfBooks); 
    console.log('First Available: ' + firstAvailable ); 
}

function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {
    console.log('Getting books in category ', Category[categoryFilter] );
    const allBooks = GetAllBooks();
    const filteredTitles: string[] = []; 

    for(let currentBook of allBooks){
        if(currentBook.category === categoryFilter){
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}

function GetBookById(id: number): Book {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
    return name + id; 
}

// let idGenerator: (chars: string, nums: number) => string; 
// idGenerator = CreateCustomerID;

// let myId: string; 
// myId = idGenerator('daniel', 54); 
// console.log(myId);

function LogBookTitles(titles: string[]): void {
    for(let title of titles ){
        console.log(title); 
    }
}

function PrintBook(book: Book): void {
    console.log(book.title + ' by ' + book.author );
}

let myBook: Book = {
    id: 5, 
    title: 'Pride and Prejudice', 
    author: 'Jane Austen', 
    available: true,
    category: Category.Fiction, 
    pages: 250, 
    markDamage: (reason: string) => console.log(reason)
}


//************************************************

// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// //LogBookTitles(fictionBooks);
// fictionBooks.forEach((val, idx, arr) => console.log( ++idx + ' - ' + val));

// let logDamage: DamageLogger;
// logDamage = (damage: string ) => console.log('Damage reported: ' + damage); 

// logDamage('test damage'); 

// let favoriteAuthor: Author;
// let favoriteLibrarian : Librarian;

// let favoriteLibrarian: Librarian = new UniversityLibrarian(); 
// favoriteLibrarian.name = 'Sharon'; 
// favoriteLibrarian.assistCustomer('Lynda');

// let ref: ReferenceItem = new ReferenceItem('New facts and figures', '2018');
// ref.printItem();
// ref.publisher = 'Radnonoasfaosnsf'; 
// console.log(ref.publisher)


let refBook: ReferenceItem = new Encyclopedia('Encyclopedia', 3, 2016);
refBook.printCitation();

function LogAndReturn<T>(thing:T): T {
    return thing;

}

let bookShelf: Shelf<Book> = new Shelf<Book>();
