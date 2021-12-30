import { utilService } from "../../../services/util.service.js"
import { emailService } from "../services/mail.service.js"


export class Compose extends React.Component {

    state = {
        email: {
            emailTo: '',
            subject: '',
            body: ''
        },
    }


    onSubmitEmailForm = (ev) => {
        ev.preventDefault()
        const { email } = this.state
        console.log(email);
        emailService.saveEmail(email)
        this.props.onSendEmail()
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ email: { ...prevState.email, [field]: value } }))

    }

    render() {
        const lorem = utilService.makeLorem(123);
        const { emailTo, subject, body } = this.state.email
        const { isAddEmailShown } = this.state

        return (
            <section className="send-email">
        
                    <div className="send-email-form flex">
                        <form onSubmit={this.onSubmitEmailForm}>

                            <label htmlFor="emailTo" className="emailTo">Email To:</label>
                            <input type="text" placeholder="Example@example.com"
                                value={emailTo}
                                name="emailTo"
                                id="emailTo"
                                onChange={this.handleChange} />

                            <label htmlFor="title" className="title">Enter Subject:</label>
                            <input type="text" placeholder="Enter Title Here"
                                value={subject}
                                name="subject"
                                id="title"
                                onChange={this.handleChange} />

                            <textarea placeholder={lorem} value={body} name="body" onChange={this.handleChange}></textarea>

                            <button className="btn">Send</button>

                        </form>


                    </div>
            </section>
        )
    }
}
