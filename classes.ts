import { Book, DamageLogger, Author, Librarian } from './interfaces';
import * as Interfaces from './interfaces';

export class UniversityLibrarian  {
    name: string; 
    email: string; 
    department: string; 

    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName );
    }

    assistFaculty(){
        console.log('Assisting faculty');
    }

    title: string;
    addToSchedule: () => void; 
    logTitle: () => void; 
    doResearch: (topic: string) => void; 
}

export abstract class ReferenceItem {
    private _publisher: string; 
    static department: string = 'Research Deparment static';

    constructor(public title: string, protected year: number) {     
        console.log('Creating a new ReferenceItem...');
    }
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`); 
        console.log(`Deparment: ${ReferenceItem.department}` );
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    abstract printCitation(): void;
}

export class Employee {
    title: string; 

    addToSchedule(): void {
        console.log('Employee added to schedule'); 
    }

    logTitle(): void {
        console.log(`Employee has the title ${this.title}`); 
    }
}

export class PublicLibrarian implements Interfaces.Librarian {
    name: string; 
    email: string; 
    department: string; 

    assistCustomer(custName: string){
        console.log('Assisting customer'); 
    }

    teachCommunity() {
        console.log('Teaching community'); 
    }
}

export class Researcher {
    doResearch(topic: string): void {
        console.log(`Doing research on ${topic}`); 
    }
}