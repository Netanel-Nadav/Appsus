import { EmailPreview } from './email-preview.jsx'


export function EmailList({ emails, markReadEmail, onMoveToTrash, onExpandEmail, onStarredEmail }) {
    if (!emails.length) return (
        <div className="no-mails-warrper flex justify-center align-center">
            <h1>No Mails to show</h1>
        </div>

    )
    return (
        <section className="emails-list main-layout">
            <table>
                <tr>
                    <th>to:</th>
                    <th>Subject</th>
                    <th>Time Published</th>
                </tr>
                {emails.map(email => <EmailPreview key={email.id} email={email} />)}
            </table>
        </section>
    )
}