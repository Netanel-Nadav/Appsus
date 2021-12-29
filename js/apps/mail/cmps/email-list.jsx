import { EmailPreview } from './email-preview.jsx'


export function EmailList({ emails, markReadEmail }) {
    // console.log(markReadEmail);
    if (!emails.length) return <h1>No Mails</h1>
    return (
        <section className="emails-list main-layout">
            {emails.map(email => <EmailPreview key={email.id} email={email} markReadEmail={markReadEmail}/>)}
        </section> 
    )
}