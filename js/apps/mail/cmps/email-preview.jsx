
const { Link } = ReactRouterDOM

export function EmailPreview({ email, markReadEmail, onMoveToTrash, onExpandEmail, onStarredEmail }) {
    const { id, body, subject, img, isRead, isExpand, status, isStarred } = email
    const readMail = isRead ? 'readMail' : ''
    const expand = isExpand ? 'expand' : ''
    const star = isStarred ? 'star' : ''
    return (
        <div className={`email flex space-between align-center ${readMail} ${expand} ${star}`}>
            <Link to={`/mister-email/${email.id}`} onClick={() => markReadEmail(id)}>
                <img src={img} />
                <div className="mail-info">
                    <h1>{subject}</h1>
                    <p className={`mail-body ${expand}`}>{body}</p>
                    <small>{status}</small>
                </div>
            </Link>
            <div className="btn-container flex">
                <button onClick={() => onMoveToTrash(id)} className="btn-trash"><i className="fas fa-trash"></i></button>
                <button onClick={() => onStarredEmail(id)} className="btn-star"><i className="far fa-star"></i></button>
                <button onClick={() => onExpandEmail(id)} className="btn-expand"><i className="fas fa-expand"></i></button>
            </div>
        </div>
    )
}



