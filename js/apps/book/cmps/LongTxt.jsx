

export class LongTxt extends React.Component {

    state = {
        isDesShown: false,
    }

    logTextWithDots = (ellipsisAt) => {
        let textArray = this.props.description.split("");
        textArray.forEach((char, idx) => {
            if (idx === ellipsisAt - 1) {
                textArray[idx] = '...'
            }
        });
        return textArray.slice(0, ellipsisAt).join('');
    }

    changeDescState = () => {
        this.setState({ isDesShown: !this.state.isDesShown });
    }

    render() {
        const {description} = this.props;
        const textToShow = this.state.isDesShown ?
        description : this.logTextWithDots(100);
        const btnText = this.state.isDesShown ? 'Show Less' : 'Read More';
        return (
            <div>
                {!this.props.isLongDesc && <p >{description}</p>

                }
                {this.props.isLongDesc &&
                    <div>
                        <p>{textToShow}</p>
                        <button onClick={this.changeDescState} className="btn">{btnText}</button>
                    </div>
                }

            </div >

        )
    }
} { }