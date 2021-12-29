


export function EmailPreview({ email }) {
    const { id, body, sentAt, subject, to } = email
    return (
        <tr>
            <td>{to}</td>
            <td>{body}</td>
            <td>{sentAt}</td>
        </tr>
    )
}





{/* <section className="email-preview flex align-center space-between">
<h1>{to}</h1>
<p>{subject}</p>
<p>{body}</p>
</section> */}