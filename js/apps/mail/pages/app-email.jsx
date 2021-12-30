const { Link } = ReactRouterDOM


import { emailService } from '../services/mail.service.js'
import { EmailList } from '../cmps/email-list.jsx'
import { Compose } from '../cmps/email-compose.jsx'
import { EmailFilter } from '../cmps/email-filter.jsx'

export class AppEmail extends React.Component {
    state = {
        emails: null,
        isAddEmailShown: false,
        filterBy: null,
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        const {filterBy} = this.state
        emailService.query(filterBy).then(emails => {
            this.setState({ emails })
        })
    }

    markReadEmail = (emailId) => {
        emailService.markAsRead(emailId).then(this.loadMails)
    }

    onSetFilter = (filterBy) => {
        console.log('filterBy at app-email', filterBy);
        this.setState({ filterBy}, this.loadMails)
    }


    onSendEmail = () => {
        const { isAddEmailShown } = this.state
        this.setState({ isAddEmailShown: !isAddEmailShown })
        this.loadMails()
    }

    
    onGoBack = () => {
        this.props.history.push('/mister-email')
    }


    onFiltering = ({ target }) => {
        var status = target.dataset.status
        console.log(status);
         this.onSetFilter(status)
    }


    render() {
        const { emails, isAddEmailShown } = this.state
        return (
            <section className="home flex main-layout">
                <aside>
                <button onClick={this.onSendEmail}><i className="fas fa-plus"></i> Compose</button>
                <EmailFilter onSetFilter={this.onSetFilter} onFiltering={this.onFiltering} />
                </aside>
                    {isAddEmailShown && <Compose onSendEmail={this.onSendEmail} />}
                {!isAddEmailShown && emails && <EmailList emails={emails} markReadEmail={this.markReadEmail} />}
            </section>
        )
    }
}