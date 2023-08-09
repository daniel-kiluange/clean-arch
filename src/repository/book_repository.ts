import { Book, BookRepository } from "../entity/book";

const booksDB: Book[] = [
    {
        Name: 'book 1'
    },
    {
        Name: 'book 2'
    }
]

export class BookRepositoryImpl implements BookRepository {
    private static instance: BookRepositoryImpl
   
    constructor() {}

    static GetInstance(){
        if (!this.instance) {
            this.instance = new BookRepositoryImpl()
        }
        return this.instance
    }

    FindByID(ID: number): Book {
        throw new Error("Method not implemented.");
    }
    Store(book: Book): Book {
        booksDB.push(book)
        console.log(booksDB)
        return book
    }
    
}