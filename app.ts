import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem, Employee, Researcher } from './classes';
import * as util from './lib/utilityFunctions';

import './librarianExtensions'; 

// merging interfaces
//let mergedBook: Book; 
//mergedBook.publisher = 'extreme programming'; 

let newLibririan = new UniversityLibrarian(); 
newLibririan.hostSeminar('Economics');