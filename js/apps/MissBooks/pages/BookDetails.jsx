import { utilService } from "../services/util.service.js";
import { bookService } from "../services/book.service.js";
import { LongTxt } from "../cmps/LongTxt.jsx";
import { ReviewsSection } from "../cmps/ReviewsSection.jsx";


const { Link } = ReactRouterDOM


export class BookDetails extends React.Component {
    state = {
        book: null,
        isAddReviewClicked: false
    }

    componentDidMount() {
        this.loadBook()
    }


    loadBook = () => {
        const { bookId } = this.props.match.params
        bookService.getBookById(bookId).then(book => {
            if (!book) return this.props.history.push('/')
            this.setState({ book })
        })
    }


    toggleReview = () => {
        this.setState({isAddReviewClicked: !this.state.isAddReviewClicked})
    }

    onGoBack = () => {
        this.props.history.push('/books')
    }


    render() {
        const { book } = this.state
        if (!book) return 'hi'

        const { authors, categories, description, language, listPrice: { amount, isOnSale, currencyCode }, pageCount, publishedDate, subtitle, thumbnail, title, reviews, id } = this.state.book;
        const currency = utilService.setCurrency(currencyCode)
        const bookDifficult = utilService.setReadingDifficult(pageCount);
        const bookSeniority = utilService.setBookSeniority(publishedDate);
        const bookPriceColor = utilService.setPriceColor(amount);
        const isLongDesc = utilService.isLongDesc(description);

        return (
            <article className="book-details-container main-layout flex">
                <div className="imgs-container">
                    {isOnSale && <img src="../assets/img/sale.png" className="on-sale-img" />}
                    <img src={thumbnail} />
                </div>
                <div className="book-details">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                    <h2>By, {authors}</h2>
                    <div className="book-category">
                        <h3>Categories:</h3>
                        <ul className="clean-list">
                            {categories.map((categorie, idx) => {
                                return <li key={idx}>{categorie}</li>
                            })}
                        </ul>
                    </div>
                    <LongTxt description={description} isLongDesc={isLongDesc} />
                    <p>Language: {language}</p>
                    <p>Publish Date: {publishedDate} {bookSeniority}</p>

                    <div className="book-price">
                        <span className={bookPriceColor}> Amount: {amount} {currency}</span>
                        <p>Book Difficult: {bookDifficult}</p>
                    </div>
                    <ReviewsSection book={book}  toggleReview={this.toggleReview}/>
                    <button className="btn" onClick={this.onGoBack}>Go Back</button>
                </div>
            </article>
        )
    }
}