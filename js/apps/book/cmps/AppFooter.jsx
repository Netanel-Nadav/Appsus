
import { FooterColor } from "./FooterColor.jsx"


export class AppFooter extends React.Component {
    state = {
        footerStyles: {}

    }


    onChangeFooterStyles = (property, value) => {
        this.setState((prevState) => ({ footerStyles: { ...prevState.footerStyles, [property]: value } }))
    }


    render() {
        const { footerStyles } = this.state
        return (
            <footer style={footerStyles} className="flex align-center justify-center">
                <FooterColor onChangeFooterStyles={this.onChangeFooterStyles} />
            </footer>
        )
    }

}