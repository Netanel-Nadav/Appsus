import { noteService } from "../services/note.service.js";
import { ColorInput } from './ColorInput.jsx'

export class NoteBtns extends React.Component {

    state = {
        isPalleteOn: false,
        color: ''
    }

    onOpenPallete = () => {
        this.setState({ isPalleteOn: true });
    }

    onChangeColor = (color) => {
        const { note } = this.props;
        noteService.setColor(note.id, color);
        this.setState({ color });
    }

    onDeleteNote = () => {
        const { notes, note } = this.props;
        const idx = notes.findIndex((item) => item.id === note.id);
        notes.splice(idx, 1);
        noteService.saveNotesToStorage(notes);
        this.props.loadNotes();
        console.log(notes);
    }

    render() {
        return <div className="note-btns">

            <button className={`pin-btn note-btn fas fa-thumbtack`}></button>

            <button onClick={() => this.onOpenPallete()} className={`color-btn note-btn fas fa-palette`}></button>

            <button className={`share-btn note-btn fas fa-envelope`}></button>

            <button className={`edit-btn note-btn fas fa-edit`}></button>

            <button onClick={() => this.onDeleteNote()} className={`delete-btn note-btn fas fa-trash-alt`}></button>

            {this.state.isPalleteOn && <ColorInput onChangeColor={this.onChangeColor} />}

        </div>
    }
}