const { Link } = ReactRouterDOM


import { emailService } from '../services/mail.service.js'


export class MaillDetails extends React.Component {
    state = {
        email: null,
    }


    componentDidMount() {
        this.loadMail()
    }

    loadMail = () => {
        const { emailId } = this.props.match.params
        emailService.getEmailById(emailId).then(email => {
            if (!email) return this.props.history.push('/mister-email')
            this.setState({ email })
        })
    }

    onGoBack = () => {
        this.props.history.push('/mister-email')
    }


    onRemoveMail = () => {
        const { id } = this.state.email
        emailService.removeEmail(id).then(() => {
            this.onGoBack()
        })
    }

    render() {
        const { email } = this.state
        return (
            this.state.email && <section className="mail-details main-layout">
                <div className="email-container">
                    <div className="email-head flex">
                        <img src={email.img} />
                        <div className="title-subject-warrper flex">
                            <h2>New Messege From:</h2>
                            <h3>{email.to}</h3>
                            <p>{email.subject}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="email-body">
                        <h2>{email.subject}</h2>
                        <p>{email.body}</p>
                    </div>
                    <hr />
                    <div className="btn-container flex justify-center align-center">
                        <button className="btn btn-back" onClick={this.onGoBack}><i className="fas fa-backward"></i></button>
                        <button className="btn btn-trash" onClick={this.onRemoveMail}><i className="fas fa-trash"></i></button>
                    </div>
                </div>
            </section>
        )
    }
}