export class Book {
    Name: string;
    
    constructor(name: string) {
        this.Name = name
    }
}

export interface BookUseCase {
    FindByID(ID: number): Book
    Store(book: Book): Book;
}

export interface BookRepository {
    FindByID(ID: number): Book
    Store(book: Book): Book;
}