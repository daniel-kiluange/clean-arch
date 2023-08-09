import { Book, BookRepository, BookUseCase } from "../entity/book"

export class BookService implements BookUseCase {

    private static instance: BookService

    private Repository: BookRepository

    constructor(repository: BookRepository) {
        this.Repository = repository
    }

    FindByID(ID: number): Book {
        return this.Repository.FindByID(ID)
    }
    Store(book: Book): Book {
        console.log(`book ${book.Name} saved`)
        return this.Repository.Store(book)
    }

}