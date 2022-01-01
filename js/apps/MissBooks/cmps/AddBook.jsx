import { bookService } from "../services/book.service.js";

export class AddBook extends React.Component {
    state = {
        searchTerm: {
            title: '',
        }
    }

    componentDidMount() {
        const {title} = this.state.searchTerm
        console.log(title);
        const url = 'https://www.googleapis.com/books/v1/volumes?printType=books&q=effective%20javascript'
        this.getBooksFromGoogle(url).then(this.distructureData);
    }


    getBooksFromGoogle = (url) => {
        return fetch(url).then(res => res.json())
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ searchTerm: {  title: value } })
    }


    distructureData = (data) => {
        const booksArry = [];
        data.items.forEach(item => {
            var source = item.volumeInfo;
            var { thumbnail } = source.imageLinks ? source.imageLinks : {};
            var book = {
                id: item.id,
                title: source.title,
                subtitle: source.subtitle,
                authors: source.authors,
                publishedDate: source.publishedDate,
                description: source.description,
                pageCount: source.pageCount,
                categories: source.categories,
                thumbnail: thumbnail,
                language: source.language,
                listPrice: {
                    amount: 109,
                    currencyCode: "EUR",
                    isOnSale: false,
                }
            }
            booksArry.push(book);

        })
        bookService.saveGoogleBooksToStorage(booksArry)
        this.setState({ books: booksArry })
    }



    render() {
        const { title, books } = this.state
        return (
            <input type="text" placeholder="search for book" name={title} value={title} onChange={this.handleChange} />
        )
    }
}




