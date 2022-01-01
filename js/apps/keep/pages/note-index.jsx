const { Link } = ReactRouterDOM

import { noteService } from '../services/note.service.js';
import { NoteBar } from '../cmps/note-bar.jsx';
import { NoteList } from '../cmps/note-list.jsx';

export class NoteIndex extends React.Component {
    state = {
        notes: null
    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        noteService.query().then(notes => {
            this.setState({ notes });
        })
    }

    render() {
        const { notes } = this.state;
        if (!notes) return <div>LOADING...</div>
        console.log('notes', notes)
        return (
            <div>
                <NoteBar />
                {notes && <NoteList notes={notes} />}
            </div>
        )
    }
}