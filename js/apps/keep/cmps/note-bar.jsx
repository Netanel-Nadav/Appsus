export class NoteBar extends React.Component {
    state = {
        input: {
            type: 'note-txt',
            placeHolder: "What's on your mind...",
            txt: '',
        }
    }

    onSaveNote = (ev) => {
        ev.preventDefault();
    }

    onSetInput = (type) => {
        switch (type) {
            case 'note-txt':
            case 'note-img':
            case 'note-video':
            case 'note-todos':
        }
    }

    render() {
        const { placeHolder, txt } = this.state.input;
        return (
            <section className="add-note flex">
                <form onSumbit={this.onSaveNote}>
                    <label htmlFor="note-input"></label>
                    <input type="text" id="note-input" name="note-input" placeholder={placeHolder} value={txt} />
                    <button className={`bar-btn far fa-comment`} onClick={() => this.onSetInput('note-txt')}></button>
                    <button className={`bar-btn far fa-image`} onClick={() => this.onSetInput('note-img')}></button>
                    <button className={`bar-btn fab fa-youtube`} onClick={() => this.onSetInput('note-video')}></button>
                    <button className={`bar-btn fas fa-list-ul`} onClick={() => this.onSetInput('note-todos')}></button>
                </form>
            </section>
        )
    }
}