
const { NavLink, Route } = ReactRouterDOM


export function ReviewsDisplay({ bookReviews, book}) {
    return (
        <section className="reviews-container">
            {bookReviews && bookReviews.map((review, idx) => 
                <div className="user-review flex space-between align-center" key={idx}>
                    <img src="../assets/img/avatar.png" />
                    <div className="review">
                        <h2>{review.name}</h2>
                        <p>{review.review}</p>
                    </div>
                </div>
            )}
            <hr />
        </section>
    )
}