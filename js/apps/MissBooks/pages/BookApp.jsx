import { bookService } from '../services/book.service.js'
import { AddBook } from '../cmps/AddBook.jsx'
import { BookList } from '../cmps/BookList.jsx'
import { BookDetails } from '../pages/BookDetails.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'

export class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: null,
    }


    componentDidMount = () => {
        this.loadBooks()
        const urlSearchParam = new URLSearchParams(this.props.location.search)
        for (let [key, value] of urlSearchParam){
            console.log(key);
            console.log(value);
        }
        
    }

    loadBooks = () => {
        const { filterBy } = this.state;
        bookService.query(filterBy).then(books => {
            this.setState({ books })
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks)
    }

    render() {
        const { books } = this.state;
        return (
            <section className="book-app">
                <AddBook />
                <BookFilter onSetFilter={this.onSetFilter} />
                <BookList books={books} />
            </section>
        )
    }
}