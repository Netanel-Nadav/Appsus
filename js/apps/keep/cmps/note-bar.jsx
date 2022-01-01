export class NoteBar extends React.Component {
    state = {
        input: {
            type: 'note-txt',
            placeHolder: "What's on your mind...",
            txt: '',
        }
    }

    handleChange = ({ target }) => {
        // const field = target.name
        const value = target.value;
        // this.setState(prevState)
        this.setState({ input: { txt: value } });
    }

    onSaveNote = (ev) => {
        ev.preventDefault();
        console.log('hey');
        // if (!this.state.input.txt)
    }

    onSetInput = (type) => {
        const { txt } = this.state.input;
        var newpPlaceHolder;
        switch (type) {
            case 'note-txt':
                newpPlaceHolder = "What's on your mind...";
                break;
            case 'note-img':
                newpPlaceHolder = "Enter image URL...";
                break;
            case 'note-video':
                newpPlaceHolder = "Enter video URL...";
                break;
            case 'note-todos':
                newpPlaceHolder = "Enter comma seperated list...";
                break;
        }
        const newInput = { type, placeHolder: newpPlaceHolder, txt }
        this.setState({ input: newInput })
        console.log(newInput);
    }

    render() {
        const { placeHolder, txt } = this.state.input;
        return (
            <section className="add-note flex justify-center align-center">
                <form onSubmit={this.onSaveNote}>
                    <label htmlFor="note-input"></label>
                    <input type="text" className="note-input" id="note-input" name="note-input" placeholder={placeHolder} value={txt} onChange={this.handleChange} />
                    <button className={`bar-btn far fa-comment`} onClick={() => this.onSetInput('note-txt')}></button>
                    <button className={`bar-btn far fa-image`} onClick={() => this.onSetInput('note-img')}></button>
                    <button className={`bar-btn fab fa-youtube`} onClick={() => this.onSetInput('note-video')}></button>
                    <button className={`bar-btn fas fa-list-ul`} onClick={() => this.onSetInput('note-todos')}></button>
                </form>
            </section>
        )
    }
}