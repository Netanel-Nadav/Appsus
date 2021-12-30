
const { Link } = ReactRouterDOM

export function EmailPreview({ email, markReadEmail, onMoveToTrash, onExpandEmail }) {
    const { id, body, subject, img, isRead, isExpand } = email
    const readMail = isRead ? 'readMail' : ''
    const expand = isExpand ? 'expand' : ''
    // const expandMail = 
    return (
        <div className={`email flex space-between align-center ${readMail} ${expand}`} onClick={() => markReadEmail(id)}>
            <Link to={`/mister-email/${email.id}`}>
                <img src={img} />
                <div className="mail-info">
                    <h1>{subject}</h1>
                    <p>{body}</p>
                </div>
            </Link>
            <div className="btn-container flex">
                <button onClick={() => onMoveToTrash(id)} className="btn-trash"><i className="fas fa-trash"></i></button>
                <button className="btn-star"><i className="far fa-star"></i></button>
                <button onClick={() => onExpandEmail(id)} className="btn-expand"><i className="fas fa-expand"></i></button>
            </div>
        </div>
    )
}



