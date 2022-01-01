import { bookService } from "../services/book.service.js"

export function ReviewsAdd({userReview, toggleAddReview, handleChange, onSaveReview, isAddReviewShown}) {
    const { name, rate, readAt, review} = userReview
    const btnText = isAddReviewShown ? 'Show Less' : 'Add Review';
    return (
        <section className="book-review">
            <button className="btn" onClick={toggleAddReview}>{btnText}</button>
            {isAddReviewShown && <form onSubmit={onSaveReview}>

                <label htmlFor="by-name">Name</label>
                <input placeholder="Enter your Name" name="name" type="text" id="by-name" value={name} onChange={handleChange} />

                <label htmlFor="by-rate">Rate</label>
                <input placeholder="Enter Book Rate" name="rate" type="number" min="1" max="5" id="by-rate" value={rate} onChange={handleChange} />

                <label htmlFor="by-name">Date</label>
                <input placeholder="Enter Date" name="readAt" type="date" id="by-readAt" value={readAt} onChange={handleChange} />

                <textarea name="review" id="by-review" value={review} onChange={handleChange}></textarea>
                <button className="btn">Send</button>

            </form>}
        </section>
    )

}