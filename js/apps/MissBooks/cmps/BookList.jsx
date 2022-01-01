import { BookPreview } from './BookPreview.jsx'


export function BookList({ books }) {
    if(!books.length) return <h1>No books to Show :'(</h1>
    return (
        <section className="book-list main-layout">
            {books.map(book => <BookPreview key={book.id} book={book} />)}
        </section>
    )
}