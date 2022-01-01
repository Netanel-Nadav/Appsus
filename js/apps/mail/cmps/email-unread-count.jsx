
export function EmailUnreadCount({ countUnreadEmails }) {
    return (
        <section className="unread-count flex justify-center align-center">
           <p>Unread Email Count: <span className="count">{countUnreadEmails}</span></p>
        </section> 
    )
}