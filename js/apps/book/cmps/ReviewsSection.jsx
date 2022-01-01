import { ReviewsDisplay } from "../cmps/ReviewsDisplay.jsx"
import { ReviewsAdd } from "../cmps/ReviewsAdd.jsx"
import { bookService } from "../services/book.service.js"

export class ReviewsSection extends React.Component {

    state = {
        userReview: {
            name: 'Books Reader',
            rate: 1,
            readAt: new Date().toISOString().slice(0, 10),
            review: '',
        },
        reviews: [],
        isAddReviewShown: false,
    
    }

    componentDidMount() {
        this.loadBook()
    }


    toggleAddReview = () => {
        this.setState({isAddReviewShown: !this.state.isAddReviewShown})
        console.log(this.state.isAddReviewShown);

    }

    onSaveReview = (ev) => {
        ev.preventDefault();
        const { userReview } = this.state
        const { id } = this.props.book
        bookService.saveReview(id, userReview)
            .then((currentReviews) => {
                console.log(currentReviews);
                this.setState({ reviews: currentReviews })
            })
        this.cleanForm()
    }


    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ userReview: { ...prevState.userReview, [field]: value } }))
    }


    cleanForm = () => {
        this.setState({ userReview: { name: '', rate: '', readAt: new Date().toISOString().slice(0, 10), review: '' } })
    }

    loadBook = () => {
        const { id } = this.props.book
        bookService.getBookById(id).then(book => {
            if (!book) return this.props.history.push('/')
            this.setState({ reviews: book.reviews })
        })
    }


    render() {
        const {  reviews, userReview, isAddReviewShown  } = this.state
        return (
            <div>
                <ReviewsDisplay bookReviews={reviews} book={this.props.book} />
                <ReviewsAdd toggleAddReview={this.toggleAddReview} userReview={userReview} handleChange={this.handleChange} onSaveReview={this.onSaveReview} isAddReviewShown={isAddReviewShown}/>
            </div>
        )
    }
}

// {book.reviews && - LINE 14
// !this.state.isAddReviewClicked && - LINE 15