import { EmailPreview } from './email-preview.jsx'


export function EmailList({ emails, markReadEmail, onMoveToTrash, onExpandEmail, onStarredEmail }) {
    if (!emails.length) return  (
    
    <h1>No Mails To Show</h1>
    )
    return (
        <section className="emails-list">
            {emails.map(email => <EmailPreview key={email.id} email={email} markReadEmail={markReadEmail} onMoveToTrash={onMoveToTrash} onExpandEmail={onExpandEmail} onStarredEmail={onStarredEmail} />)}
        </section> 
    )
}