
const { Link } = ReactRouterDOM




export function EmailPreview({ email, markReadEmail }) {
    // console.log(markReadEmail);
    // console.log(email);
    let { id, body, sentAt, subject, to, img, isRead } = email
    const readMail = isRead ? 'readMail' : ''
    return (
        <Link to={`/mister-email/${email.id}`}>
            <div className={`email flex space-between align-center ${readMail}`} onClick={() => markReadEmail(id)}>
                <img src={img} />
                <div className="mail-info">
                    <h1>{subject}</h1>
                    <p>{body}</p>
                </div>
                <button>&#9733;</button>

            </div>
        </Link>
    )
}





{/* <section className="email-preview flex align-center space-between">
<h1>{to}</h1>
<p>{subject}</p>
<p>{body}</p>
</section> */}





// Table

// <tr>
// <td>{to}</td>
// <td>{body}</td>
// <td>{sentAt}</td>
// </tr>