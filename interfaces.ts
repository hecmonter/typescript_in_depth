import { Category } from './enums';

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamage?: DamageLogger;
}

interface DamageLogger {
    (reason: string): void; 
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

interface Inventory<T> {
    getNewestItem: () => T;
    addItem: (newItem: T) => void;
    getAllItems: () => Array<T>;
}

interface Magazine {
    title: string; 
    publisher: string;
}

export { Book, DamageLogger, Inventory, Magazine, Author, Librarian }