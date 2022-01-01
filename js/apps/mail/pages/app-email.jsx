const { Link } = ReactRouterDOM

import { emailService } from '../services/mail.service.js'
import { EmailList } from '../cmps/email-list.jsx'
import { Compose } from '../cmps/email-compose.jsx'
import { EmailFilter } from '../cmps/email-filter.jsx'
import { EmailFilterByRead } from '../cmps/email-filter-by-read.jsx'
import { EmailFilterByStar } from '../cmps/email-filter-by-star.jsx'
import { EmailSearchFilter } from '../cmps/email-filter-by-search.jsx'
import { EmailUnreadCount } from '../cmps/email-unread-count.jsx'

export class AppEmail extends React.Component {
    state = {
        emails: [],
        isAddEmailShown: false,
        filterBy: { status: 'inbox', isRead: undefined, search: '', isStarred: undefined },
        isExpanded: false,

    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        const { filterBy } = this.state
        emailService.query(filterBy).then(emails => {
            this.setState({ emails })
        })
    }

    markReadEmail = (emailId) => {
        emailService.markAsRead(emailId).then(this.loadMails)
    }

    onFiltering = ({ target }) => {
        const status = target.dataset.status
        console.log(this.state);
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, status } }), this.loadMails)
    }

    onReadFiltering = (filterByRead) => {
        // console.log('filterByRead', filterByRead);
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, isRead: filterByRead } }), this.loadMails)
    }

    onSearchFiltering = (filterBySearch) => {
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, search: filterBySearch } }), this.loadMails)
    }

    onStarFiltering = (isStarred) => {
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, isStarred } }), this.loadMails)
    }

    onSendEmail = () => {
        const { isAddEmailShown } = this.state
        this.setState({ isAddEmailShown: !isAddEmailShown })
        this.loadMails()
    }


    onGoBack = () => {
        this.props.history.push('/mister-email')
    }

    onMoveToTrash = (emailId) => {
        console.log('emailId app-email', emailId);
        emailService.moveToTrash(emailId)
            .then(this.loadMails)
    }

    onExpandEmail = (emailId) => {
        emailService.toogleExpand(emailId)
            .then(this.loadMails)
    }

    onStarredEmail = (emailId) => {
        emailService.starEmail(emailId)
            .then(this.loadMails)
    }

    countUnreadEmails = () => {
        return this.state.emails.filter(email => !email.isRead).length;
    }

    render() {
        const { emails, isAddEmailShown } = this.state
        return (
            <section className="home main-layout">
                <div className="home-filter flex">
                    <EmailSearchFilter onSearchFiltering={this.onSearchFiltering} />
                    <EmailFilterByRead onReadFiltering={this.onReadFiltering} />
                    <EmailFilterByStar onStarFiltering={this.onStarFiltering} />
                </div>
                <div className="main-site flex">
                    <aside>
                        <button onClick={this.onSendEmail}><i className="fas fa-plus"></i> Compose</button>
                        <EmailFilter onFiltering={this.onFiltering} />
                    </aside>
                    {isAddEmailShown && <Compose onSendEmail={this.onSendEmail} />}
                    {!isAddEmailShown && emails && <EmailList emails={emails} markReadEmail={this.markReadEmail} onMoveToTrash={this.onMoveToTrash} onExpandEmail={this.onExpandEmail} onStarredEmail={this.onStarredEmail} />}
                    
                </div>
                <EmailUnreadCount countUnreadEmails={this.countUnreadEmails()} />
            </section>
        )
    }
}