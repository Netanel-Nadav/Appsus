import { utilService } from "../services/util.service.js"


const { Link } = ReactRouterDOM

export function BookPreview({ book }) {
    const currency = utilService.setCurrency(book)
    return (
        <Link className="" to={`/books/${book.id}`}>
        <article className="book-preview">
            <img src={book.thumbnail} />
            <p>Book Title: {book.title}</p>
            <p>Book Price: {currency} {book.listPrice.amount}</p>
        </article>
        </Link>
    )
} 