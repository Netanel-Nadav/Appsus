import { EmailPreview } from './email-preview.jsx'


export function EmailList({ emails }) {
    if (!emails.length) return <h1>No Mails</h1>
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