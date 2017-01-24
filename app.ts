import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem, Employee, Researcher } from './classes';
import * as util from './lib/utilityFunctions';

// polymorphic this.

class LibraryBook {
    CheckOut(): this {
        console.log('Checking out a book'); 
        return this;
    }

    Checkin(): this {
        //console.log('Cheching in a book');

        if(this instanceof ChildrensBook){
            console.log('Checking a childrens book'); 
        } 

        if(this instanceof ElectronicBook){
            console.log('Checking an Electronic Book');
        } 
        return this; 
    }
}

class ChildrensBook extends LibraryBook {
    Clean(): this {
        console.log('Cleaning a book'); 
        return this; 
    }
}

class ElectronicBook extends LibraryBook {
    RemoveFromCustomerDevice(): this {
        console.log('Removing book from device'); 
        return this; 
    }
}

let kidBook = new ChildrensBook();

kidBook
    .Checkin()
    .Clean()
    .CheckOut();


let electronicBook = new ElectronicBook();

electronicBook
    .Checkin()
    .RemoveFromCustomerDevice()
    .CheckOut();



