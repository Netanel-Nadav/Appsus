const { Link } = ReactRouterDOM


import { emailService } from '../services/mail.service.js'


export class MaillDetails extends React.Component {
    state = {
        email: null,
    }


    componentDidMount() {
        // console.log('props in mail-details', this.props);
        this.loadMail()
    }

    loadMail = () => {
        const { emailId } = this.props.match.params
        emailService.getEmailById(emailId).then(email => {
            if (!email) return this.props.history.push('/mister-email')
            this.setState({ email })
        })
    }

    markAsRead = () => {
        const { emailId } = this.props.match.params
        emailService.getEmailById(emailId).then(email => {
            email.isRead = true;
            this.setState({ email })
        })
    }

    onGoBack = () => {
        this.props.history.push('/mister-email')
    }


    onDeleteMail = () => {
        const { id } = this.state.email
        emailService.removeEmail(id).then(() => {
            this.onGoBack()
        })
    }

    render() {
        // const { subject, body, sentAt, to } = this.state.email
        const { email } = this.state
        // console.log('email in mail-details' , email);
        return (
            this.state.email && <section className="mail-details">
                <div className="email-container">
                    <h1>New Messege From: {email.to}</h1>
                    <img src={email.img} />

                    <hr />
                    <h2>{email.subject}</h2>
                    <p>{email.body}</p>
                    <button className="btn" onClick={this.onGoBack}><i className="fas fa-backward"></i></button>
                    <button className="btn" onClick={this.onDeleteMail}><i className="fas fa-trash"></i></button>
                </div>
            </section>
        )
    }
}