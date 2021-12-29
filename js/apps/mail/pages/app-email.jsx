const { Link } = ReactRouterDOM


import { emailService } from '../services/mail.service.js'
import { EmailList } from '../cmps/email-list.jsx'

export class AppEmail extends React.Component {
    state = {
        emails: null,
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        emailService.query().then(emails => {
            this.setState({ emails })
        })
    }

    markReadEmail = (emailId) => {
        emailService.getEmailById(emailId)
            .then(email => {
                email.isRead = true
                console.log(email);
            })
    }


    render() {
        const { emails } = this.state
        return (
            <section className="home">
                {emails && <EmailList emails={emails} markReadEmail={this.markReadEmail} />}
            </section>
        )
    }
}