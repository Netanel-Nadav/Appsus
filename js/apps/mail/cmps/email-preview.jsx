
const { Link } = ReactRouterDOM




export function EmailPreview({ email, markReadEmail }) {
    const { id, body, sentAt, subject, to, img, isRead } = email
    const readMail = isRead ? 'readMail' : ''
    return (
        <Link to={`/mister-email/${email.id}`}>
            <div className={`email flex space-between align-center ${readMail}`} onClick={() => markReadEmail(id)}>
                <img src={img} />
                <div className="mail-info">
                    <h1>{subject}</h1>
                    <p>{body}</p>
                </div>
                <div className="btn-container flex">
                    <button><i className="fas fa-trash"></i></button>
                    <button><i className="far fa-star"></i></button>
                </div>
            </div>
        </Link>
    )
}