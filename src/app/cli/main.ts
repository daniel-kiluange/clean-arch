import { Book } from "../../entity/book"
import { BookRepositoryImpl } from "../../repository/book_repository"
import { BookService } from "../../service/book_service"

function main() {
    let repo = BookRepositoryImpl.GetInstance()
    let b: Book = new Book("Book test")
    let service = BookService.GetInstance(repo)

    let result = service.Store(b)

    console.log(result)

}

main()