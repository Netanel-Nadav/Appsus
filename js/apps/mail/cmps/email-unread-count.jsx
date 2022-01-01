
export function EmailUnreadCount({ countUnreadEmails }) {
    return (
        <section className="unread-count">
           <p>Unread Email Count: <span className="unread-count">{countUnreadEmails}</span></p>
        </section> 
    )
}